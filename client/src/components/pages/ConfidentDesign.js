import React, { Component } from 'react';
import Header from '../Header';
import BI from '../images/9.png';




class ConfidentDesign extends Component {


    render() {
        return (
            <div>
            <div>
            <Header/>
            </div>
            <div style={{float: 'center',  padding: 65, backgroundImage:`url(${BI})`, backgroundRepeat: 'no-repet', backgroundAttachment: 'fixed', backgroundSize: 'cover', backgroundSize: '100% 100%'}}>
                <h1 style={{color: 'white', textAlign: 'center', textShadow: '0 0 0.05em white'}}>¿Qué es Confident?</h1>
                
                <p style={{color: 'white', textAlign: 'justify', paddingTop: 10, fontSize:18, textShadow: '0 0 0.3em black'}}>Desde la Universidad Michoacana de San Nicolás de Hidalgo y la Facultad de Contaduría y Ciencias Administrativas se propone desarrollar una aplicación que ayude a prevenir y orientar a los jóvenes en situaciones de vulnerabilidad para enfrentar los problemas. Así como también, ayudar con el tema de resolución de dudas en cuento a temas de salud mental en jóvenes, y conocer los intereses y realidad de las nuevas generaciones y próximos profesionistas.</p>
                <p style={{color: 'white', textAlign: 'justify', paddingTop: 10, fontSize:18, textShadow: '0 0 0.3em black'}}>Es así, que, a raíz de estas inquietudes, nace el proyecto para desarrollar la aplicación llamada “Confident”.</p>
                <p style={{color: 'white', textAlign: 'justify', paddingTop: 10, fontSize:18, textShadow: '0 0 0.3em black'}}>Confident es una plataforma que ofrece un asistente virtual, capaz de emprender un dialogo con jóvenes adolescentes, brindándoles contactos de ayuda relacionados a salud mental y física, temas y problemas juveniles e igualdad de género.</p>
                <p style={{color: 'white', textAlign: 'justify', paddingTop: 10, fontSize:18, textShadow: '0 0 0.2em black'}}>Tus datos siempre estarán seguros con nosotros pues contamos con protocolos de seguridad de la información. El usuario puede estar seguro del buen almacenamiento y tratamiento de sus datos, leyendo, aceptando o rechazando el aviso de privacidad. También el usuario puede detallar para que procesos específicos no quiere que se utilicen sus datos, dentro del mismo aviso.</p>
                <h2 style={{color: 'white', textAlign: 'center', paddingTop: 50, textShadow: '0 0 0.3em black'}}>Misión</h2>
                <p style={{color: 'white', textAlign: 'justify', paddingTop: 10, fontSize:18, textShadow: '0 0 0.2em black'}}>En Confident nos dedicamos a ofrecer un servicio conversacional a jóvenes adolescentes, esencialmente en Morelia, para la promoción de la salud mental. Priorizamos a nuestros usuarios dándoles atención en cualquier lugar, a cualquier hora, en cualquier plataforma, brindando una imagen amigable y sencilla.</p>
                <h2 style={{color: 'white', textAlign: 'center', paddingTop: 50, textShadow: '0 0 0.3em black'}}>Visión</h2>
                <p style={{color: 'white', textAlign: 'justify', paddingTop: 10, fontSize:18, textShadow: '0 0 0.2em black'}}>Ser el principal servicio de promoción de la salud mental en jóvenes adolescentes, estando presente en su día a día y adaptándose a las circunstancias tecnológicas. De igual manera, producir información utilizable en la mejora de los servicios y políticas públicas enfocados al cuidado y desarrollo de la juventud mexicana.</p>
                <h2 style={{color: 'white', textAlign: 'center', paddingTop: 50, textShadow: '0 0 0.3em black'}}>Valores</h2>
                <p style={{color: 'white', textAlign: 'justify', paddingTop: 10, fontSize:18, textShadow: '0 0 0.2em black'}}>{'\u2B50'} Responsabilidad: Coherencia en el manejo de la gestión empresarial y toma de decisiones.</p>
                <p style={{color: 'white', textAlign: 'justify', paddingTop: 20, fontSize:18, textShadow: '0 0 0.2em black'}}>{'\u2B50'} Integridad: Manejo estructurado y consiente de la información generada por los usuarios.</p>
                <p style={{color: 'white', textAlign: 'justify', paddingTop: 20, fontSize:18, textShadow: '0 0 0.2em black'}}>{'\u2B50'} Pasión: Apego por ofrecer siempre un buen servicio.</p>
                <p style={{color: 'white', textAlign: 'justify', paddingTop: 20, fontSize:18, textShadow: '0 0 0.2em black'}}>{'\u2B50'} Honestidad: Proporcionar a clientes y partes interesadas, una imagen e información clara y concisa.</p>
                <p style={{color: 'white', textAlign: 'justify', paddingTop: 20, fontSize:18, textShadow: '0 0 0.2em black'}}>{'\u2B50'} Transparencia: Evidenciar las buenas prácticas a las que está comprometida la estructura organizacional, tanto en el manejo de la información, como la puesta en marcha y gestión de los procesos.</p>
                <p style={{color: 'white', textAlign: 'justify', paddingTop: 20, fontSize:18, textShadow: '0 0 0.2em black'}}>{'\u2B50'} Adaptabilidad: Siempre adaptarse a las tecnologías más recientes en el mercado en cuanto a las plataformas tecnologías, se refiere.</p>
            </div>
            </div>
        )
    }
}

export default ConfidentDesign;