import { Text, View, StyleSheet, TouchableOpacity, Modal, Image } from "react-native";
import { Camera, CameraType  } from "expo-camera";
import { useEffect, useRef, useState } from "react";

export default function TelaCamera()
{
    const[ permissao, setPermissao] = useState(false);
    const [ tipo, setTipo ] = useState( CameraType.back);
    const [ foto, setFoto ] = useState( "" );
    const [ qrcode, setQrcode ] = useState( "" )
    const cameraref = useRef();


    async function PermissaoCamera()
    {
        const { status } = await Camera.requestCameraPermissionsAsync();
        if( status == "granted" ){
            setPermissao( true );
        }
    }

    function TrocaTipoCamera()
    {
        setTipo(current => (current === CameraType.back ? CameraType.front :CameraType.back));
    }
     async function TirarFoto()
    {
        const foto = await cameraref.current.takePictureAsync();
        setFoto( foto.uri );
    
    }
    useEffect( () => {
    PermissaoCamera();
    }, [] );
    return(
        <View>
            { permissao 
            ?
             
             <Camera 
             type={tipo}
             ref={cameraref}
             ratio="16:9"
             onBarCodeScanned={ scaned => {
                if( scaned.raw ) {
                    setQrcode( scaned.raw );
                    
                }
             }}
             style={css.camera}>

<View>
                    <TouchableOpacity style={css.btn} onPress={TrocaTipoCamera}>
                        <Text style={css.btnText}>Alternar</Text>

                    </TouchableOpacity>
                 </View>
                 <View>
                    <TouchableOpacity style={css.btn} onPress={TirarFoto}>
                        <Text style={css.btnText}>Tirar Foto</Text>

                    </TouchableOpacity>
                 </View>
             </Camera>
            
            :
             <Text>Deu errado</Text> }

             { ( foto && permissao ) 
                && <Modal
                animationType="slide"
                transparent={true}
                >
                    <Image
                    source={{ uri: foto }}
                    height={200}
                    width={200}
                    
                    />
                        <TouchableOpacity style={css.btn} onPress={()=> setFoto( "" )}>
                            <Text style={css.btnText}>Fechar</Text>
                        </TouchableOpacity>
                    

                </Modal>
            }
            { qrcode && 
            <Modal
            animationType="slide"
            
            >
                <View
                slide={css.modal}>
                    <Text>{qrcode}</Text>
                </View>
                
                 
                    <TouchableOpacity onPress={()=> setQrcode( "" )} style={css.closeModal}>
                        <Text style={css.closeModalText}>Fechar</Text>
                    </TouchableOpacity>
                </Modal>
            }
        </View>
    )
}
const css = StyleSheet.create({
    camera: {
        width: "100%",
        height: "100%",
        resizeMode: "contain"
    },
    btn: {
        width: "25%",
        height: 45,
        borderRadius: 5,
        backgroundColor: "#A5D6A7",
        marginTop: 10,
        
    },
    btnText: {
        lineHeight: 45,
        color: "black",
        textAlign: "center",
        fontSize: 20,
    },
})