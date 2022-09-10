import React, { Component } from 'react';
import Header from '../Header';
import BI from '../images/12.png';

import { MediaMatcher, MediaServerRender } from 'react-media-match'

class ContactsDesign extends Component {


    render() {
        return (

            <div>
                <MediaServerRender predicted="desktop" hydrated>
                    <MediaMatcher
                        mobile=
                        {
                            <div>
                                <div>
                                    <Header />
                                </div>
                                <div style={{ float: 'center', padding: 65, backgroundImage: `url(${BI})`, backgroundRepeat: 'no-repet', backgroundAttachment: 'fixed', backgroundSize: 'cover', backgroundSize: '100%' }}>
                                    <h1 style={{ color: 'white', textAlign: 'center', textShadow: '0 0 0.05em white' }}>Contactos de Ayuda</h1>

                                    <h4 style={{ color: 'white', textAlign: 'center', paddingTop: 20, textShadow: '0 0 0.3em royalblue' }}>Instituciones para tratar problemas para la juventud y la salud mental</h4>

                                    <div style={{ display: 'flex', justifyContent: 'left', overflowX: 'scroll' }}>
                                        <div style={{ display: 'inline-block', width: 200, height: 250, position: 'relative', flexDirection: 'row', margin: 4, }}>
                                            <div style={{ flex: 1, width: 200, height: 100, bottom: 0, position: 'absolute', backgroundColor: 'rgba(0, 0, 0, 0.45)', alignSelf: 'flex-end', borderBottomLeftRadius: 30, borderBottomRightRadius: 30 }}>
                                                <p style={{ padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12 }}>Hospital Psiquiátrico "Dr. José Torres Orozco"</p>
                                                <p style={{ padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12 }}><a target='_blank' href="https://salud.michoacan.gob.mx/hospital-psiquiatrico/">Página Web</a></p>
                                                <p style={{ padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 10 }}>Tel: 443 324 6801</p>
                                            </div>
                                            <img style={{ width: 200, height: 250, borderRadius: 30, borderColor: 'black', borderWidth: 4 }} src={require('../images/contactsImages/1.jpg')} />
                                        </div>

                                        <div style={{ display: 'inline-block', width: 200, height: 250, position: 'relative', flexDirection: 'row', margin: 4, }}>
                                            <div style={{ flex: 1, width: 200, height: 100, bottom: 0, position: 'absolute', backgroundColor: 'rgba(0, 0, 0, 0.45)', alignSelf: 'flex-end', borderBottomLeftRadius: 30, borderBottomRightRadius: 30 }}>
                                                <p style={{ padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12 }}>Instituto de la Juventud Michoacana</p>
                                                <p style={{ padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12 }}><a target='_blank' href="https://www.facebook.com/InJuveMich">Página de Facebook</a></p>
                                                <p style={{ padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 10 }}>Tel: 443 313 3663</p>
                                            </div>
                                            <img style={{ width: 200, height: 250, borderRadius: 30, borderColor: 'black', borderWidth: 4 }} src={require('../images/contactsImages/2.jpeg')} />
                                        </div>

                                        <div style={{ display: 'inline-block', width: 200, height: 250, position: 'relative', flexDirection: 'row', margin: 4, }}>
                                            <div style={{ flex: 1, width: 200, height: 100, bottom: 0, position: 'absolute', backgroundColor: 'rgba(0, 0, 0, 0.45)', alignSelf: 'flex-end', borderBottomLeftRadius: 30, borderBottomRightRadius: 30 }}>
                                                <p style={{ padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12 }}>Instituto de la Juventud Moreliana</p>
                                                <p style={{ padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12 }}><a target='_blank' href="https://www.facebook.com/ijummorelia/">Página de Facebook</a></p>
                                                <p style={{ padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 10 }}>Tel: 443 312 2735</p>
                                            </div>
                                            <img style={{ width: 200, height: 250, borderRadius: 30, borderColor: 'black', borderWidth: 4 }} src={require('../images/contactsImages/3.jpeg')} />
                                        </div>

                                        <div style={{ display: 'inline-block', width: 200, height: 250, position: 'relative', flexDirection: 'row', margin: 4, }}>
                                            <div style={{ flex: 1, width: 200, height: 100, bottom: 0, position: 'absolute', backgroundColor: 'rgba(0, 0, 0, 0.45)', alignSelf: 'flex-end', borderBottomLeftRadius: 30, borderBottomRightRadius: 30 }}>
                                                <p style={{ padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12 }}>Centro de Atención Clínica e Investigación en Salud Mental</p>
                                                <p style={{ padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12 }}><a target='_blank' href="https://www.cacisme.com/">Página Web</a></p>
                                                <p style={{ padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 10 }}>Tel: 443 312 3705</p>
                                            </div>
                                            <img style={{ width: 200, height: 250, borderRadius: 30, borderColor: 'black', borderWidth: 4 }} src={require('../images/contactsImages/4.jpeg')} />
                                        </div>

                                        <div style={{ display: 'inline-block', width: 200, height: 250, position: 'relative', flexDirection: 'row', margin: 4, }}>
                                            <div style={{ flex: 1, width: 200, height: 100, bottom: 0, position: 'absolute', backgroundColor: 'rgba(0, 0, 0, 0.45)', alignSelf: 'flex-end', borderBottomLeftRadius: 30, borderBottomRightRadius: 30 }}>
                                                <p style={{ padding: 2, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12 }}>Centro Especializado En Salud Mental Y Psiq Sumando Esfuerzos IAP</p>
                                                <p style={{ padding: 2, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12 }}><a target='_blank' href="https://www.facebook.com/Centro-Especializado-En-Salud-Mental-Y-Psiq-Sumando-Esfuerzos-IAP-198440957383235/">Página de Facebook</a></p>
                                                <p style={{ padding: 2, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 10 }}>Tel: 443 313 3232</p>
                                            </div>
                                            <img style={{ width: 200, height: 250, borderRadius: 30, borderColor: 'black', borderWidth: 4 }} src={require('../images/contactsImages/5.jpeg')} />
                                        </div>
                                    </div>

                                    <h4 style={{ color: 'white', textAlign: 'center', paddingTop: 20, textShadow: '0 0 0.3em royalblue' }}>Instituciones de Educación</h4>

                                    <div style={{ display: 'flex', justifyContent: 'left', overflowX: 'scroll' }}>
                                        <div style={{ display: 'inline-block', width: 200, height: 250, position: 'relative', flexDirection: 'row', margin: 4, }}>
                                            <div style={{ flex: 1, width: 200, height: 100, bottom: 0, position: 'absolute', backgroundColor: 'rgba(0, 0, 0, 0.45)', alignSelf: 'flex-end', borderBottomLeftRadius: 30, borderBottomRightRadius: 30 }}>
                                                <p style={{ padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12 }}>Universidad Michoacana de San Nicolás de Hidalgo</p>
                                                <p style={{ padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12 }}><a target='_blank' href="https://www.umich.mx/">Página Web</a></p>
                                                <p style={{ padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 10 }}>Tel: 443 322 3500</p>
                                            </div>
                                            <img style={{ width: 200, height: 250, borderRadius: 30, borderColor: 'black', borderWidth: 4 }} src={require('../images/contactsImages/6.jpeg')} />
                                        </div>

                                        <div style={{ display: 'inline-block', width: 200, height: 250, position: 'relative', flexDirection: 'row', margin: 4, }}>
                                            <div style={{ flex: 1, width: 200, height: 100, bottom: 0, position: 'absolute', backgroundColor: 'rgba(0, 0, 0, 0.45)', alignSelf: 'flex-end', borderBottomLeftRadius: 30, borderBottomRightRadius: 30 }}>
                                                <p style={{ padding: 2, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12 }}>Facultad de Contaduría y Ciencias Administrativas UMSNH</p>
                                                <p style={{ padding: 2, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12 }}><a target='_blank' href="https://www.fcca.umich.mx/">Página Web</a></p>
                                                <p style={{ padding: 2, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 10 }}>Tel: 443 299 4370</p>
                                            </div>
                                            <img style={{ width: 200, height: 250, borderRadius: 30, borderColor: 'black', borderWidth: 4 }} src={require('../images/contactsImages/7.png')} />
                                        </div>

                                        <div style={{ display: 'inline-block', width: 200, height: 250, position: 'relative', flexDirection: 'row', margin: 4, }}>
                                            <div style={{ flex: 1, width: 200, height: 100, bottom: 0, position: 'absolute', backgroundColor: 'rgba(0, 0, 0, 0.45)', alignSelf: 'flex-end', borderBottomLeftRadius: 30, borderBottomRightRadius: 30 }}>
                                                <p style={{ padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12 }}>Facultad de Psicología UMSNH</p>
                                                <p style={{ padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12 }}><a target='_blank' href="http://www.psicologia.umich.mx/">Página Web</a></p>
                                                <p style={{ padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 10 }}>Tel: 443 312 9909</p>
                                            </div>
                                            <img style={{ width: 200, height: 250, borderRadius: 30, borderColor: 'black', borderWidth: 4 }} src={require('../images/contactsImages/8.jpeg')} />
                                        </div>

                                        <div style={{ display: 'inline-block', width: 200, height: 250, position: 'relative', flexDirection: 'row', margin: 4, }}>
                                            <div style={{ flex: 1, width: 200, height: 100, bottom: 0, position: 'absolute', backgroundColor: 'rgba(0, 0, 0, 0.45)', alignSelf: 'flex-end', borderBottomLeftRadius: 30, borderBottomRightRadius: 30 }}>
                                                <p style={{ padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12 }}>Facultad de Ciencias Médicas Y Biológicas UMSNH</p>
                                                <p style={{ padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12 }}><a target='_blank' href="https://www.fcmb.umich.mx/">Página Web</a></p>
                                                <p style={{ padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 10 }}>Tel: 443 312 0014</p>
                                            </div>
                                            <img style={{ width: 200, height: 250, borderRadius: 30, borderColor: 'black', borderWidth: 4 }} src={require('../images/contactsImages/9.jpeg')} />
                                        </div>

                                        <div style={{ display: 'inline-block', width: 200, height: 250, position: 'relative', flexDirection: 'row', margin: 4, }}>
                                            <div style={{ flex: 1, width: 200, height: 100, bottom: 0, position: 'absolute', backgroundColor: 'rgba(0, 0, 0, 0.45)', alignSelf: 'flex-end', borderBottomLeftRadius: 30, borderBottomRightRadius: 30 }}>
                                                <p style={{ padding: 2, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12 }}>Departamento de Salud Mental de la Facultad de Medicina UMSNH</p>
                                                <p style={{ padding: 2, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12 }}><a target='_blank' href="https://www.facebook.com/Departamento-de-Salud-Mental-de-la-Facultad-de-Medicina-UMSNH-528818380462687/">Página de Facebook</a></p>
                                                <p style={{ padding: 2, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 10 }}>Tel: 312 001 4398</p>
                                            </div>
                                            <img style={{ width: 200, height: 250, borderRadius: 30, borderColor: 'black', borderWidth: 4 }} src={require('../images/contactsImages/10.png')} />
                                        </div>

                                        <div style={{ display: 'inline-block', width: 200, height: 250, position: 'relative', flexDirection: 'row', margin: 4, }}>
                                            <div style={{ flex: 1, width: 200, height: 100, bottom: 0, position: 'absolute', backgroundColor: 'rgba(0, 0, 0, 0.45)', alignSelf: 'flex-end', borderBottomLeftRadius: 30, borderBottomRightRadius: 30 }}>
                                                <p style={{ padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12 }}>Bachillerato UMSNH</p>
                                                <p style={{ padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12 }}><a target='_blank' href="https://www.facebook.com/Bachillerato-UMSNH-108763154583427/">Página de Facebook</a></p>
                                                <p style={{ padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 10 }}>Tel: 443 322 2705</p>
                                            </div>
                                            <img style={{ width: 200, height: 250, borderRadius: 30, borderColor: 'black', borderWidth: 4 }} src={require('../images/contactsImages/11.jpeg')} />
                                        </div>

                                        <div style={{ display: 'inline-block', width: 200, height: 250, position: 'relative', flexDirection: 'row', margin: 4, }}>
                                            <div style={{ flex: 1, width: 200, height: 100, bottom: 0, position: 'absolute', backgroundColor: 'rgba(0, 0, 0, 0.45)', alignSelf: 'flex-end', borderBottomLeftRadius: 30, borderBottomRightRadius: 30 }}>
                                                <p style={{ padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12 }}>UNAM Campus Morelia</p>
                                                <p style={{ padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12 }}><a target='_blank' href="https://www.facebook.com/UNAM.Morelia">Página de Facebook</a></p>
                                                <p style={{ padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 10 }}>Tel: 443 322 3500</p>
                                            </div>
                                            <img style={{ width: 200, height: 250, borderRadius: 30, borderColor: 'black', borderWidth: 4 }} src={require('../images/contactsImages/12.jpeg')} />
                                        </div>
                                    </div>

                                    <h4 style={{ color: 'white', textAlign: 'center', paddingTop: 20, textShadow: '0 0 0.3em royalblue' }}>Salud y Hospitales</h4>

                                    <div style={{ display: 'flex', justifyContent: 'left', overflowX: 'scroll' }}>
                                        <div style={{ display: 'inline-block', width: 200, height: 250, position: 'relative', flexDirection: 'row', margin: 4, }}>
                                            <div style={{ flex: 1, width: 200, height: 100, bottom: 0, position: 'absolute', backgroundColor: 'rgba(0, 0, 0, 0.45)', alignSelf: 'flex-end', borderBottomLeftRadius: 30, borderBottomRightRadius: 30 }}>
                                                <p style={{ padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12 }}>Secretaría de Salud de Michoacán</p>
                                                <p style={{ padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12 }}><a target='_blank' href="https://www.facebook.com/SaludMich">Página de Facebook</a></p>
                                                <p style={{ padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 10 }}>Tel: 443 312 0514</p>
                                            </div>
                                            <img style={{ width: 200, height: 250, borderRadius: 30, borderColor: 'black', borderWidth: 4 }} src={require('../images/contactsImages/13.jpeg')} />
                                        </div>

                                        <div style={{ display: 'inline-block', width: 200, height: 250, position: 'relative', flexDirection: 'row', margin: 4, }}>
                                            <div style={{ flex: 1, width: 200, height: 100, bottom: 0, position: 'absolute', backgroundColor: 'rgba(0, 0, 0, 0.45)', alignSelf: 'flex-end', borderBottomLeftRadius: 30, borderBottomRightRadius: 30 }}>
                                                <p style={{ padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12 }}>Hospital General “Dr. Miguel Silva” de Morelia</p>
                                                <p style={{ padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12 }}><a target='_blank' href="www.salud.michoacan.gob.mx">Página Web</a></p>
                                                <p style={{ padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 10 }}>Tel: 443 689 2609</p>
                                            </div>
                                            <img style={{ width: 200, height: 250, borderRadius: 30, borderColor: 'black', borderWidth: 4 }} src={require('../images/contactsImages/14.jpeg')} />
                                        </div>

                                        <div style={{ display: 'inline-block', width: 200, height: 250, position: 'relative', flexDirection: 'row', margin: 4, }}>
                                            <div style={{ flex: 1, width: 200, height: 100, bottom: 0, position: 'absolute', backgroundColor: 'rgba(0, 0, 0, 0.45)', alignSelf: 'flex-end', borderBottomLeftRadius: 30, borderBottomRightRadius: 30 }}>
                                                <p style={{ padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12 }}>Secretaría de Bien Común y Política Social Morelia</p>
                                                <p style={{ padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12 }}><a target='_blank' href="https://www.facebook.com/BienyPoliticaSocial">Página de Facebook</a></p>
                                                <p style={{ padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 10 }}>Tel: 443 322 0710</p>
                                            </div>
                                            <img style={{ width: 200, height: 250, borderRadius: 30, borderColor: 'black', borderWidth: 4 }} src={require('../images/contactsImages/15.png')} />
                                        </div>

                                        <div style={{ display: 'inline-block', width: 200, height: 250, position: 'relative', flexDirection: 'row', margin: 4, }}>
                                            <div style={{ flex: 1, width: 200, height: 100, bottom: 0, position: 'absolute', backgroundColor: 'rgba(0, 0, 0, 0.45)', alignSelf: 'flex-end', borderBottomLeftRadius: 30, borderBottomRightRadius: 30 }}>
                                                <p style={{ padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12 }}>IMSS Hospital General Regional 1 Charo</p>
                                                <p style={{ padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12 }}><a target='_blank' href="https://www.facebook.com/HGRNo1Charo">Página de Facebook</a></p>
                                                <p style={{ padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 10 }}>Tel: 443 310 9950</p>
                                            </div>
                                            <img style={{ width: 200, height: 250, borderRadius: 30, borderColor: 'black', borderWidth: 4 }} src={require('../images/contactsImages/16.jpeg')} />
                                        </div>

                                        <div style={{ display: 'inline-block', width: 200, height: 250, position: 'relative', flexDirection: 'row', margin: 4, }}>
                                            <div style={{ flex: 1, width: 200, height: 100, bottom: 0, position: 'absolute', backgroundColor: 'rgba(0, 0, 0, 0.45)', alignSelf: 'flex-end', borderBottomLeftRadius: 30, borderBottomRightRadius: 30 }}>
                                                <p style={{ padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12 }}>Sistema DIF Michoacán</p>
                                                <p style={{ padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12 }}><a target='_blank' href="https://www.facebook.com/difmich">Página de Facebook</a></p>
                                                <p style={{ padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 10 }}>Tel: 443 313 3540</p>
                                            </div>
                                            <img style={{ width: 200, height: 250, borderRadius: 30, borderColor: 'black', borderWidth: 4 }} src={require('../images/contactsImages/17.jpeg')} />
                                        </div>

                                        <div style={{ display: 'inline-block', width: 200, height: 250, position: 'relative', flexDirection: 'row', margin: 4, }}>
                                            <div style={{ flex: 1, width: 200, height: 100, bottom: 0, position: 'absolute', backgroundColor: 'rgba(0, 0, 0, 0.45)', alignSelf: 'flex-end', borderBottomLeftRadius: 30, borderBottomRightRadius: 30 }}>
                                                <p style={{ padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12 }}>DIF Morelia</p>
                                                <p style={{ padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12 }}><a target='_blank' href="https://www.facebook.com/DIFMorelia/">Página de Facebook</a></p>
                                                <p style={{ padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 10 }}>Tel: 443 113 4000</p>
                                            </div>
                                            <img style={{ width: 200, height: 250, borderRadius: 30, borderColor: 'black', borderWidth: 4 }} src={require('../images/contactsImages/18.jpeg')} />
                                        </div>
                                    </div>

                                    <h4 style={{ color: 'white', textAlign: 'center', paddingTop: 20, textShadow: '0 0 0.3em royalblue' }}>Instituciones para la Igualdad de Género</h4>

                                    <div style={{ display: 'flex', justifyContent: 'left', overflowX: 'scroll' }}>
                                        <div style={{ display: 'inline-block', width: 200, height: 250, position: 'relative', flexDirection: 'row', margin: 4, }}>
                                            <div style={{ flex: 1, width: 200, height: 100, bottom: 0, position: 'absolute', backgroundColor: 'rgba(0, 0, 0, 0.45)', alignSelf: 'flex-end', borderBottomLeftRadius: 30, borderBottomRightRadius: 30 }}>
                                                <p style={{ padding: 2, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12 }}>Secretaría de Igualdad Sustantiva y Desarrollo de las Mujeres</p>
                                                <p style={{ padding: 2, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12 }}><a target='_blank' href="https://www.facebook.com/SeMujerMich">Página de Facebook</a></p>
                                                <p style={{ padding: 2, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 10 }}>Tel: 443 582 2082</p>
                                            </div>
                                            <img style={{ width: 200, height: 250, borderRadius: 30, borderColor: 'black', borderWidth: 4 }} src={require('../images/contactsImages/19.png')} />
                                        </div>

                                        <div style={{ display: 'inline-block', width: 200, height: 250, position: 'relative', flexDirection: 'row', margin: 4, }}>
                                            <div style={{ flex: 1, width: 200, height: 100, bottom: 0, position: 'absolute', backgroundColor: 'rgba(0, 0, 0, 0.45)', alignSelf: 'flex-end', borderBottomLeftRadius: 30, borderBottomRightRadius: 30 }}>
                                                <p style={{ padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12 }}>Instituto de la Mujer Moreliana para la Igualdad Sustantiva</p>
                                                <p style={{ padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12 }}><a target='_blank' href="https://www.facebook.com/ImmujerisMorelia">Página de Facebook</a></p>
                                                <p style={{ padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 10 }}>Tel: 443 232 7000</p>
                                            </div>
                                            <img style={{ width: 200, height: 250, borderRadius: 30, borderColor: 'black', borderWidth: 4 }} src={require('../images/contactsImages/20.jpeg')} />
                                        </div>

                                        <div style={{ display: 'inline-block', width: 200, height: 250, position: 'relative', flexDirection: 'row', margin: 4, }}>
                                            <div style={{ flex: 1, width: 200, height: 100, bottom: 0, position: 'absolute', backgroundColor: 'rgba(0, 0, 0, 0.45)', alignSelf: 'flex-end', borderBottomLeftRadius: 30, borderBottomRightRadius: 30 }}>
                                                <p style={{ padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12 }}>Equidad de Género UMSNH</p>
                                                <p style={{ padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12 }}><a target='_blank' href="https://www.umich.mx/iniciativas/equidadgenero/">Página Web</a></p>
                                                <p style={{ padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 10 }}>Tel: 443 322 3500</p>
                                            </div>
                                            <img style={{ width: 200, height: 250, borderRadius: 30, borderColor: 'black', borderWidth: 4 }} src={require('../images/contactsImages/21.jpeg')} />
                                        </div>

                                        <div style={{ display: 'inline-block', width: 200, height: 250, position: 'relative', flexDirection: 'row', margin: 4, }}>
                                            <div style={{ flex: 1, width: 200, height: 100, bottom: 0, position: 'absolute', backgroundColor: 'rgba(0, 0, 0, 0.45)', alignSelf: 'flex-end', borderBottomLeftRadius: 30, borderBottomRightRadius: 30 }}>
                                                <p style={{ padding: 2, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12 }}>Comisión Interna para la Igualdad de Género UNAM ENES Morelia</p>
                                                <p style={{ padding: 2, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12 }}><a target='_blank' href="https://www.facebook.com/cinigenesmorelia/">Página de Facebook</a></p>
                                                <p style={{ padding: 2, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 10 }}>Tel: 443 322 2705</p>
                                            </div>
                                            <img style={{ width: 200, height: 250, borderRadius: 30, borderColor: 'black', borderWidth: 4 }} src={require('../images/contactsImages/22.jpeg')} />
                                        </div>

                                        <div style={{ display: 'inline-block', width: 200, height: 250, position: 'relative', flexDirection: 'row', margin: 4, }}>
                                            <div style={{ flex: 1, width: 200, height: 100, bottom: 0, position: 'absolute', backgroundColor: 'rgba(0, 0, 0, 0.45)', alignSelf: 'flex-end', borderBottomLeftRadius: 30, borderBottomRightRadius: 30 }}>
                                                <p style={{ padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12 }}>Mujeres Empoderadas A.C.</p>
                                                <p style={{ padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12 }}><a target='_blank' href="https://www.facebook.com/mujeresempoderadasac/">Página de Facebook</a></p>
                                                <p style={{ padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 10 }}>Tel: 333 314 8265</p>
                                            </div>
                                            <img style={{ width: 200, height: 250, borderRadius: 30, borderColor: 'black', borderWidth: 4 }} src={require('../images/contactsImages/23.jpeg')} />
                                        </div>
                                    </div>

                                    <h4 style={{ color: 'white', textAlign: 'center', paddingTop: 20, textShadow: '0 0 0.3em royalblue' }}>Gobierno</h4>

                                    <div style={{ display: 'flex', justifyContent: 'left', overflowX: 'scroll' }}>
                                        <div style={{ display: 'inline-block', width: 200, height: 250, position: 'relative', flexDirection: 'row', margin: 4, }}>
                                            <div style={{ flex: 1, width: 200, height: 100, bottom: 0, position: 'absolute', backgroundColor: 'rgba(0, 0, 0, 0.45)', alignSelf: 'flex-end', borderBottomLeftRadius: 30, borderBottomRightRadius: 30 }}>
                                                <p style={{ padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12 }}>Gobierno de Michoacán</p>
                                                <p style={{ padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12 }}><a target='_blank' href="https://www.facebook.com/gobmichoacan">Página de Facebook</a></p>
                                                <p style={{ padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 10 }}>Tel: 443 317 1481</p>
                                            </div>
                                            <img style={{ width: 200, height: 250, borderRadius: 30, borderColor: 'black', borderWidth: 4 }} src={require('../images/contactsImages/24.png')} />
                                        </div>

                                        <div style={{ display: 'inline-block', width: 200, height: 250, position: 'relative', flexDirection: 'row', margin: 4, }}>
                                            <div style={{ flex: 1, width: 200, height: 100, bottom: 0, position: 'absolute', backgroundColor: 'rgba(0, 0, 0, 0.45)', alignSelf: 'flex-end', borderBottomLeftRadius: 30, borderBottomRightRadius: 30 }}>
                                                <p style={{ padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12 }}>H. Ayuntamiento de Morelia</p>
                                                <p style={{ padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12 }}><a target='_blank' href="https://www.facebook.com/MoreliaGob/">Página de Facebook</a></p>
                                                <p style={{ padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 10 }}>Tel: 443 322 9511</p>
                                            </div>
                                            <img style={{ width: 200, height: 250, borderRadius: 30, borderColor: 'black', borderWidth: 4 }} src={require('../images/contactsImages/25.jpeg')} />
                                        </div>
                                    </div>



                                </div>
                            </div>}

                        tablet=
                        {
                            <div>
                                <div>
                                    <Header />
                                </div>
                                <div style={{ float: 'center', padding: 65, backgroundImage: `url(${BI})`, backgroundRepeat: 'no-repet', backgroundAttachment: 'fixed', backgroundSize: 'cover', backgroundSize: '100%' }}>
                                    <h1 style={{ color: 'white', textAlign: 'center', textShadow: '0 0 0.05em white' }}>Contactos de Ayuda</h1>

                                    <h4 style={{ color: 'white', textAlign: 'center', paddingTop: 20, textShadow: '0 0 0.3em royalblue' }}>Instituciones para tratar problemas para la juventud y la salud mental</h4>

                                    <div style={{ display: 'flex', justifyContent: 'left', overflowX: 'scroll' }}>
                                        <div style={{ display: 'inline-block', width: 200, height: 250, position: 'relative', flexDirection: 'row', margin: 4, }}>
                                            <div style={{ flex: 1, width: 200, height: 100, bottom: 0, position: 'absolute', backgroundColor: 'rgba(0, 0, 0, 0.45)', alignSelf: 'flex-end', borderBottomLeftRadius: 30, borderBottomRightRadius: 30 }}>
                                                <p style={{ padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12 }}>Hospital Psiquiátrico "Dr. José Torres Orozco"</p>
                                                <p style={{ padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12 }}><a target='_blank' href="https://salud.michoacan.gob.mx/hospital-psiquiatrico/">Página Web</a></p>
                                                <p style={{ padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 10 }}>Tel: 443 324 6801</p>
                                            </div>
                                            <img style={{ width: 200, height: 250, borderRadius: 30, borderColor: 'black', borderWidth: 4 }} src={require('../images/contactsImages/1.jpg')} />
                                        </div>

                                        <div style={{ display: 'inline-block', width: 200, height: 250, position: 'relative', flexDirection: 'row', margin: 4, }}>
                                            <div style={{ flex: 1, width: 200, height: 100, bottom: 0, position: 'absolute', backgroundColor: 'rgba(0, 0, 0, 0.45)', alignSelf: 'flex-end', borderBottomLeftRadius: 30, borderBottomRightRadius: 30 }}>
                                                <p style={{ padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12 }}>Instituto de la Juventud Michoacana</p>
                                                <p style={{ padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12 }}><a target='_blank' href="https://www.facebook.com/InJuveMich">Página de Facebook</a></p>
                                                <p style={{ padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 10 }}>Tel: 443 313 3663</p>
                                            </div>
                                            <img style={{ width: 200, height: 250, borderRadius: 30, borderColor: 'black', borderWidth: 4 }} src={require('../images/contactsImages/2.jpeg')} />
                                        </div>

                                        <div style={{ display: 'inline-block', width: 200, height: 250, position: 'relative', flexDirection: 'row', margin: 4, }}>
                                            <div style={{ flex: 1, width: 200, height: 100, bottom: 0, position: 'absolute', backgroundColor: 'rgba(0, 0, 0, 0.45)', alignSelf: 'flex-end', borderBottomLeftRadius: 30, borderBottomRightRadius: 30 }}>
                                                <p style={{ padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12 }}>Instituto de la Juventud Moreliana</p>
                                                <p style={{ padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12 }}><a target='_blank' href="https://www.facebook.com/ijummorelia/">Página de Facebook</a></p>
                                                <p style={{ padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 10 }}>Tel: 443 312 2735</p>
                                            </div>
                                            <img style={{ width: 200, height: 250, borderRadius: 30, borderColor: 'black', borderWidth: 4 }} src={require('../images/contactsImages/3.jpeg')} />
                                        </div>

                                        <div style={{ display: 'inline-block', width: 200, height: 250, position: 'relative', flexDirection: 'row', margin: 4, }}>
                                            <div style={{ flex: 1, width: 200, height: 100, bottom: 0, position: 'absolute', backgroundColor: 'rgba(0, 0, 0, 0.45)', alignSelf: 'flex-end', borderBottomLeftRadius: 30, borderBottomRightRadius: 30 }}>
                                                <p style={{ padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12 }}>Centro de Atención Clínica e Investigación en Salud Mental</p>
                                                <p style={{ padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12 }}><a target='_blank' href="https://www.cacisme.com/">Página Web</a></p>
                                                <p style={{ padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 10 }}>Tel: 443 312 3705</p>
                                            </div>
                                            <img style={{ width: 200, height: 250, borderRadius: 30, borderColor: 'black', borderWidth: 4 }} src={require('../images/contactsImages/4.jpeg')} />
                                        </div>

                                        <div style={{ display: 'inline-block', width: 200, height: 250, position: 'relative', flexDirection: 'row', margin: 4, }}>
                                            <div style={{ flex: 1, width: 200, height: 100, bottom: 0, position: 'absolute', backgroundColor: 'rgba(0, 0, 0, 0.45)', alignSelf: 'flex-end', borderBottomLeftRadius: 30, borderBottomRightRadius: 30 }}>
                                                <p style={{ padding: 2, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12 }}>Centro Especializado En Salud Mental Y Psiq Sumando Esfuerzos IAP</p>
                                                <p style={{ padding: 2, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12 }}><a target='_blank' href="https://www.facebook.com/Centro-Especializado-En-Salud-Mental-Y-Psiq-Sumando-Esfuerzos-IAP-198440957383235/">Página de Facebook</a></p>
                                                <p style={{ padding: 2, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 10 }}>Tel: 443 313 3232</p>
                                            </div>
                                            <img style={{ width: 200, height: 250, borderRadius: 30, borderColor: 'black', borderWidth: 4 }} src={require('../images/contactsImages/5.jpeg')} />
                                        </div>
                                    </div>

                                    <h4 style={{ color: 'white', textAlign: 'center', paddingTop: 20, textShadow: '0 0 0.3em royalblue' }}>Instituciones de Educación</h4>

                                    <div style={{ display: 'flex', justifyContent: 'left', overflowX: 'scroll' }}>
                                        <div style={{ display: 'inline-block', width: 200, height: 250, position: 'relative', flexDirection: 'row', margin: 4, }}>
                                            <div style={{ flex: 1, width: 200, height: 100, bottom: 0, position: 'absolute', backgroundColor: 'rgba(0, 0, 0, 0.45)', alignSelf: 'flex-end', borderBottomLeftRadius: 30, borderBottomRightRadius: 30 }}>
                                                <p style={{ padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12 }}>Universidad Michoacana de San Nicolás de Hidalgo</p>
                                                <p style={{ padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12 }}><a target='_blank' href="https://www.umich.mx/">Página Web</a></p>
                                                <p style={{ padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 10 }}>Tel: 443 322 3500</p>
                                            </div>
                                            <img style={{ width: 200, height: 250, borderRadius: 30, borderColor: 'black', borderWidth: 4 }} src={require('../images/contactsImages/6.jpeg')} />
                                        </div>

                                        <div style={{ display: 'inline-block', width: 200, height: 250, position: 'relative', flexDirection: 'row', margin: 4, }}>
                                            <div style={{ flex: 1, width: 200, height: 100, bottom: 0, position: 'absolute', backgroundColor: 'rgba(0, 0, 0, 0.45)', alignSelf: 'flex-end', borderBottomLeftRadius: 30, borderBottomRightRadius: 30 }}>
                                                <p style={{ padding: 2, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12 }}>Facultad de Contaduría y Ciencias Administrativas UMSNH</p>
                                                <p style={{ padding: 2, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12 }}><a target='_blank' href="https://www.fcca.umich.mx/">Página Web</a></p>
                                                <p style={{ padding: 2, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 10 }}>Tel: 443 299 4370</p>
                                            </div>
                                            <img style={{ width: 200, height: 250, borderRadius: 30, borderColor: 'black', borderWidth: 4 }} src={require('../images/contactsImages/7.png')} />
                                        </div>

                                        <div style={{ display: 'inline-block', width: 200, height: 250, position: 'relative', flexDirection: 'row', margin: 4, }}>
                                            <div style={{ flex: 1, width: 200, height: 100, bottom: 0, position: 'absolute', backgroundColor: 'rgba(0, 0, 0, 0.45)', alignSelf: 'flex-end', borderBottomLeftRadius: 30, borderBottomRightRadius: 30 }}>
                                                <p style={{ padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12 }}>Facultad de Psicología UMSNH</p>
                                                <p style={{ padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12 }}><a target='_blank' href="http://www.psicologia.umich.mx/">Página Web</a></p>
                                                <p style={{ padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 10 }}>Tel: 443 312 9909</p>
                                            </div>
                                            <img style={{ width: 200, height: 250, borderRadius: 30, borderColor: 'black', borderWidth: 4 }} src={require('../images/contactsImages/8.jpeg')} />
                                        </div>

                                        <div style={{ display: 'inline-block', width: 200, height: 250, position: 'relative', flexDirection: 'row', margin: 4, }}>
                                            <div style={{ flex: 1, width: 200, height: 100, bottom: 0, position: 'absolute', backgroundColor: 'rgba(0, 0, 0, 0.45)', alignSelf: 'flex-end', borderBottomLeftRadius: 30, borderBottomRightRadius: 30 }}>
                                                <p style={{ padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12 }}>Facultad de Ciencias Médicas Y Biológicas UMSNH</p>
                                                <p style={{ padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12 }}><a target='_blank' href="https://www.fcmb.umich.mx/">Página Web</a></p>
                                                <p style={{ padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 10 }}>Tel: 443 312 0014</p>
                                            </div>
                                            <img style={{ width: 200, height: 250, borderRadius: 30, borderColor: 'black', borderWidth: 4 }} src={require('../images/contactsImages/9.jpeg')} />
                                        </div>

                                        <div style={{ display: 'inline-block', width: 200, height: 250, position: 'relative', flexDirection: 'row', margin: 4, }}>
                                            <div style={{ flex: 1, width: 200, height: 100, bottom: 0, position: 'absolute', backgroundColor: 'rgba(0, 0, 0, 0.45)', alignSelf: 'flex-end', borderBottomLeftRadius: 30, borderBottomRightRadius: 30 }}>
                                                <p style={{ padding: 2, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12 }}>Departamento de Salud Mental de la Facultad de Medicina UMSNH</p>
                                                <p style={{ padding: 2, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12 }}><a target='_blank' href="https://www.facebook.com/Departamento-de-Salud-Mental-de-la-Facultad-de-Medicina-UMSNH-528818380462687/">Página de Facebook</a></p>
                                                <p style={{ padding: 2, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 10 }}>Tel: 312 001 4398</p>
                                            </div>
                                            <img style={{ width: 200, height: 250, borderRadius: 30, borderColor: 'black', borderWidth: 4 }} src={require('../images/contactsImages/10.png')} />
                                        </div>

                                        <div style={{ display: 'inline-block', width: 200, height: 250, position: 'relative', flexDirection: 'row', margin: 4, }}>
                                            <div style={{ flex: 1, width: 200, height: 100, bottom: 0, position: 'absolute', backgroundColor: 'rgba(0, 0, 0, 0.45)', alignSelf: 'flex-end', borderBottomLeftRadius: 30, borderBottomRightRadius: 30 }}>
                                                <p style={{ padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12 }}>Bachillerato UMSNH</p>
                                                <p style={{ padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12 }}><a target='_blank' href="https://www.facebook.com/Bachillerato-UMSNH-108763154583427/">Página de Facebook</a></p>
                                                <p style={{ padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 10 }}>Tel: 443 322 2705</p>
                                            </div>
                                            <img style={{ width: 200, height: 250, borderRadius: 30, borderColor: 'black', borderWidth: 4 }} src={require('../images/contactsImages/11.jpeg')} />
                                        </div>

                                        <div style={{ display: 'inline-block', width: 200, height: 250, position: 'relative', flexDirection: 'row', margin: 4, }}>
                                            <div style={{ flex: 1, width: 200, height: 100, bottom: 0, position: 'absolute', backgroundColor: 'rgba(0, 0, 0, 0.45)', alignSelf: 'flex-end', borderBottomLeftRadius: 30, borderBottomRightRadius: 30 }}>
                                                <p style={{ padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12 }}>UNAM Campus Morelia</p>
                                                <p style={{ padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12 }}><a target='_blank' href="https://www.facebook.com/UNAM.Morelia">Página de Facebook</a></p>
                                                <p style={{ padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 10 }}>Tel: 443 322 3500</p>
                                            </div>
                                            <img style={{ width: 200, height: 250, borderRadius: 30, borderColor: 'black', borderWidth: 4 }} src={require('../images/contactsImages/12.jpeg')} />
                                        </div>
                                    </div>

                                    <h4 style={{ color: 'white', textAlign: 'center', paddingTop: 20, textShadow: '0 0 0.3em royalblue' }}>Salud y Hospitales</h4>

                                    <div style={{ display: 'flex', justifyContent: 'left', overflowX: 'scroll' }}>
                                        <div style={{ display: 'inline-block', width: 200, height: 250, position: 'relative', flexDirection: 'row', margin: 4, }}>
                                            <div style={{ flex: 1, width: 200, height: 100, bottom: 0, position: 'absolute', backgroundColor: 'rgba(0, 0, 0, 0.45)', alignSelf: 'flex-end', borderBottomLeftRadius: 30, borderBottomRightRadius: 30 }}>
                                                <p style={{ padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12 }}>Secretaría de Salud de Michoacán</p>
                                                <p style={{ padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12 }}><a target='_blank' href="https://www.facebook.com/SaludMich">Página de Facebook</a></p>
                                                <p style={{ padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 10 }}>Tel: 443 312 0514</p>
                                            </div>
                                            <img style={{ width: 200, height: 250, borderRadius: 30, borderColor: 'black', borderWidth: 4 }} src={require('../images/contactsImages/13.jpeg')} />
                                        </div>

                                        <div style={{ display: 'inline-block', width: 200, height: 250, position: 'relative', flexDirection: 'row', margin: 4, }}>
                                            <div style={{ flex: 1, width: 200, height: 100, bottom: 0, position: 'absolute', backgroundColor: 'rgba(0, 0, 0, 0.45)', alignSelf: 'flex-end', borderBottomLeftRadius: 30, borderBottomRightRadius: 30 }}>
                                                <p style={{ padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12 }}>Hospital General “Dr. Miguel Silva” de Morelia</p>
                                                <p style={{ padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12 }}><a target='_blank' href="www.salud.michoacan.gob.mx">Página Web</a></p>
                                                <p style={{ padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 10 }}>Tel: 443 689 2609</p>
                                            </div>
                                            <img style={{ width: 200, height: 250, borderRadius: 30, borderColor: 'black', borderWidth: 4 }} src={require('../images/contactsImages/14.jpeg')} />
                                        </div>

                                        <div style={{ display: 'inline-block', width: 200, height: 250, position: 'relative', flexDirection: 'row', margin: 4, }}>
                                            <div style={{ flex: 1, width: 200, height: 100, bottom: 0, position: 'absolute', backgroundColor: 'rgba(0, 0, 0, 0.45)', alignSelf: 'flex-end', borderBottomLeftRadius: 30, borderBottomRightRadius: 30 }}>
                                                <p style={{ padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12 }}>Secretaría de Bien Común y Política Social Morelia</p>
                                                <p style={{ padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12 }}><a target='_blank' href="https://www.facebook.com/BienyPoliticaSocial">Página de Facebook</a></p>
                                                <p style={{ padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 10 }}>Tel: 443 322 0710</p>
                                            </div>
                                            <img style={{ width: 200, height: 250, borderRadius: 30, borderColor: 'black', borderWidth: 4 }} src={require('../images/contactsImages/15.png')} />
                                        </div>

                                        <div style={{ display: 'inline-block', width: 200, height: 250, position: 'relative', flexDirection: 'row', margin: 4, }}>
                                            <div style={{ flex: 1, width: 200, height: 100, bottom: 0, position: 'absolute', backgroundColor: 'rgba(0, 0, 0, 0.45)', alignSelf: 'flex-end', borderBottomLeftRadius: 30, borderBottomRightRadius: 30 }}>
                                                <p style={{ padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12 }}>IMSS Hospital General Regional 1 Charo</p>
                                                <p style={{ padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12 }}><a target='_blank' href="https://www.facebook.com/HGRNo1Charo">Página de Facebook</a></p>
                                                <p style={{ padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 10 }}>Tel: 443 310 9950</p>
                                            </div>
                                            <img style={{ width: 200, height: 250, borderRadius: 30, borderColor: 'black', borderWidth: 4 }} src={require('../images/contactsImages/16.jpeg')} />
                                        </div>

                                        <div style={{ display: 'inline-block', width: 200, height: 250, position: 'relative', flexDirection: 'row', margin: 4, }}>
                                            <div style={{ flex: 1, width: 200, height: 100, bottom: 0, position: 'absolute', backgroundColor: 'rgba(0, 0, 0, 0.45)', alignSelf: 'flex-end', borderBottomLeftRadius: 30, borderBottomRightRadius: 30 }}>
                                                <p style={{ padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12 }}>Sistema DIF Michoacán</p>
                                                <p style={{ padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12 }}><a target='_blank' href="https://www.facebook.com/difmich">Página de Facebook</a></p>
                                                <p style={{ padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 10 }}>Tel: 443 313 3540</p>
                                            </div>
                                            <img style={{ width: 200, height: 250, borderRadius: 30, borderColor: 'black', borderWidth: 4 }} src={require('../images/contactsImages/17.jpeg')} />
                                        </div>

                                        <div style={{ display: 'inline-block', width: 200, height: 250, position: 'relative', flexDirection: 'row', margin: 4, }}>
                                            <div style={{ flex: 1, width: 200, height: 100, bottom: 0, position: 'absolute', backgroundColor: 'rgba(0, 0, 0, 0.45)', alignSelf: 'flex-end', borderBottomLeftRadius: 30, borderBottomRightRadius: 30 }}>
                                                <p style={{ padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12 }}>DIF Morelia</p>
                                                <p style={{ padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12 }}><a target='_blank' href="https://www.facebook.com/DIFMorelia/">Página de Facebook</a></p>
                                                <p style={{ padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 10 }}>Tel: 443 113 4000</p>
                                            </div>
                                            <img style={{ width: 200, height: 250, borderRadius: 30, borderColor: 'black', borderWidth: 4 }} src={require('../images/contactsImages/18.jpeg')} />
                                        </div>
                                    </div>

                                    <h4 style={{ color: 'white', textAlign: 'center', paddingTop: 20, textShadow: '0 0 0.3em royalblue' }}>Instituciones para la Igualdad de Género</h4>

                                    <div style={{ display: 'flex', justifyContent: 'left', overflowX: 'scroll' }}>
                                        <div style={{ display: 'inline-block', width: 200, height: 250, position: 'relative', flexDirection: 'row', margin: 4, }}>
                                            <div style={{ flex: 1, width: 200, height: 100, bottom: 0, position: 'absolute', backgroundColor: 'rgba(0, 0, 0, 0.45)', alignSelf: 'flex-end', borderBottomLeftRadius: 30, borderBottomRightRadius: 30 }}>
                                                <p style={{ padding: 2, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12 }}>Secretaría de Igualdad Sustantiva y Desarrollo de las Mujeres</p>
                                                <p style={{ padding: 2, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12 }}><a target='_blank' href="https://www.facebook.com/SeMujerMich">Página de Facebook</a></p>
                                                <p style={{ padding: 2, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 10 }}>Tel: 443 582 2082</p>
                                            </div>
                                            <img style={{ width: 200, height: 250, borderRadius: 30, borderColor: 'black', borderWidth: 4 }} src={require('../images/contactsImages/19.png')} />
                                        </div>

                                        <div style={{ display: 'inline-block', width: 200, height: 250, position: 'relative', flexDirection: 'row', margin: 4, }}>
                                            <div style={{ flex: 1, width: 200, height: 100, bottom: 0, position: 'absolute', backgroundColor: 'rgba(0, 0, 0, 0.45)', alignSelf: 'flex-end', borderBottomLeftRadius: 30, borderBottomRightRadius: 30 }}>
                                                <p style={{ padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12 }}>Instituto de la Mujer Moreliana para la Igualdad Sustantiva</p>
                                                <p style={{ padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12 }}><a target='_blank' href="https://www.facebook.com/ImmujerisMorelia">Página de Facebook</a></p>
                                                <p style={{ padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 10 }}>Tel: 443 232 7000</p>
                                            </div>
                                            <img style={{ width: 200, height: 250, borderRadius: 30, borderColor: 'black', borderWidth: 4 }} src={require('../images/contactsImages/20.jpeg')} />
                                        </div>

                                        <div style={{ display: 'inline-block', width: 200, height: 250, position: 'relative', flexDirection: 'row', margin: 4, }}>
                                            <div style={{ flex: 1, width: 200, height: 100, bottom: 0, position: 'absolute', backgroundColor: 'rgba(0, 0, 0, 0.45)', alignSelf: 'flex-end', borderBottomLeftRadius: 30, borderBottomRightRadius: 30 }}>
                                                <p style={{ padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12 }}>Equidad de Género UMSNH</p>
                                                <p style={{ padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12 }}><a target='_blank' href="https://www.umich.mx/iniciativas/equidadgenero/">Página Web</a></p>
                                                <p style={{ padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 10 }}>Tel: 443 322 3500</p>
                                            </div>
                                            <img style={{ width: 200, height: 250, borderRadius: 30, borderColor: 'black', borderWidth: 4 }} src={require('../images/contactsImages/21.jpeg')} />
                                        </div>

                                        <div style={{ display: 'inline-block', width: 200, height: 250, position: 'relative', flexDirection: 'row', margin: 4, }}>
                                            <div style={{ flex: 1, width: 200, height: 100, bottom: 0, position: 'absolute', backgroundColor: 'rgba(0, 0, 0, 0.45)', alignSelf: 'flex-end', borderBottomLeftRadius: 30, borderBottomRightRadius: 30 }}>
                                                <p style={{ padding: 2, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12 }}>Comisión Interna para la Igualdad de Género UNAM ENES Morelia</p>
                                                <p style={{ padding: 2, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12 }}><a target='_blank' href="https://www.facebook.com/cinigenesmorelia/">Página de Facebook</a></p>
                                                <p style={{ padding: 2, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 10 }}>Tel: 443 322 2705</p>
                                            </div>
                                            <img style={{ width: 200, height: 250, borderRadius: 30, borderColor: 'black', borderWidth: 4 }} src={require('../images/contactsImages/22.jpeg')} />
                                        </div>

                                        <div style={{ display: 'inline-block', width: 200, height: 250, position: 'relative', flexDirection: 'row', margin: 4, }}>
                                            <div style={{ flex: 1, width: 200, height: 100, bottom: 0, position: 'absolute', backgroundColor: 'rgba(0, 0, 0, 0.45)', alignSelf: 'flex-end', borderBottomLeftRadius: 30, borderBottomRightRadius: 30 }}>
                                                <p style={{ padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12 }}>Mujeres Empoderadas A.C.</p>
                                                <p style={{ padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12 }}><a target='_blank' href="https://www.facebook.com/mujeresempoderadasac/">Página de Facebook</a></p>
                                                <p style={{ padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 10 }}>Tel: 333 314 8265</p>
                                            </div>
                                            <img style={{ width: 200, height: 250, borderRadius: 30, borderColor: 'black', borderWidth: 4 }} src={require('../images/contactsImages/23.jpeg')} />
                                        </div>
                                    </div>

                                    <h4 style={{ color: 'white', textAlign: 'center', paddingTop: 20, textShadow: '0 0 0.3em royalblue' }}>Gobierno</h4>

                                    <div style={{ display: 'flex', justifyContent: 'left', overflowX: 'scroll' }}>
                                        <div style={{ display: 'inline-block', width: 200, height: 250, position: 'relative', flexDirection: 'row', margin: 4, }}>
                                            <div style={{ flex: 1, width: 200, height: 100, bottom: 0, position: 'absolute', backgroundColor: 'rgba(0, 0, 0, 0.45)', alignSelf: 'flex-end', borderBottomLeftRadius: 30, borderBottomRightRadius: 30 }}>
                                                <p style={{ padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12 }}>Gobierno de Michoacán</p>
                                                <p style={{ padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12 }}><a target='_blank' href="https://www.facebook.com/gobmichoacan">Página de Facebook</a></p>
                                                <p style={{ padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 10 }}>Tel: 443 317 1481</p>
                                            </div>
                                            <img style={{ width: 200, height: 250, borderRadius: 30, borderColor: 'black', borderWidth: 4 }} src={require('../images/contactsImages/24.png')} />
                                        </div>

                                        <div style={{ display: 'inline-block', width: 200, height: 250, position: 'relative', flexDirection: 'row', margin: 4, }}>
                                            <div style={{ flex: 1, width: 200, height: 100, bottom: 0, position: 'absolute', backgroundColor: 'rgba(0, 0, 0, 0.45)', alignSelf: 'flex-end', borderBottomLeftRadius: 30, borderBottomRightRadius: 30 }}>
                                                <p style={{ padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12 }}>H. Ayuntamiento de Morelia</p>
                                                <p style={{ padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12 }}><a target='_blank' href="https://www.facebook.com/MoreliaGob/">Página de Facebook</a></p>
                                                <p style={{ padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 10 }}>Tel: 443 322 9511</p>
                                            </div>
                                            <img style={{ width: 200, height: 250, borderRadius: 30, borderColor: 'black', borderWidth: 4 }} src={require('../images/contactsImages/25.jpeg')} />
                                        </div>
                                    </div>



                                </div>
                            </div>}

                        desktop=
                        {
                            <div>
                                <div>
                                    <Header />
                                </div>
                                <div style={{ float: 'center', padding: 65, backgroundImage: `url(${BI})`, backgroundRepeat: 'no-repet', backgroundAttachment: 'fixed', backgroundSize: 'cover', backgroundSize: '100%' }}>
                                    <h1 style={{ color: 'white', textAlign: 'center', textShadow: '0 0 0.05em white' }}>Contactos de Ayuda</h1>

                                    <h4 style={{ color: 'white', textAlign: 'center', paddingTop: 20, textShadow: '0 0 0.3em royalblue' }}>Instituciones para tratar problemas para la juventud y la salud mental</h4>

                                    <div style={{ display: 'flex', justifyContent: 'left', overflowX: 'scroll' }}>
                                        <div style={{ display: 'inline-block', width: 200, height: 250, position: 'relative', flexDirection: 'row', margin: 4, }}>
                                            <div style={{ flex: 1, width: 200, height: 100, bottom: 0, position: 'absolute', backgroundColor: 'rgba(0, 0, 0, 0.45)', alignSelf: 'flex-end', borderBottomLeftRadius: 30, borderBottomRightRadius: 30 }}>
                                                <p style={{ padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12 }}>Hospital Psiquiátrico "Dr. José Torres Orozco"</p>
                                                <p style={{ padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12 }}><a target='_blank' href="https://salud.michoacan.gob.mx/hospital-psiquiatrico/">Página Web</a></p>
                                                <p style={{ padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 10 }}>Tel: 443 324 6801</p>
                                            </div>
                                            <img style={{ width: 200, height: 250, borderRadius: 30, borderColor: 'black', borderWidth: 4 }} src={require('../images/contactsImages/1.jpg')} />
                                        </div>

                                        <div style={{ display: 'inline-block', width: 200, height: 250, position: 'relative', flexDirection: 'row', margin: 4, }}>
                                            <div style={{ flex: 1, width: 200, height: 100, bottom: 0, position: 'absolute', backgroundColor: 'rgba(0, 0, 0, 0.45)', alignSelf: 'flex-end', borderBottomLeftRadius: 30, borderBottomRightRadius: 30 }}>
                                                <p style={{ padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12 }}>Instituto de la Juventud Michoacana</p>
                                                <p style={{ padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12 }}><a target='_blank' href="https://www.facebook.com/InJuveMich">Página de Facebook</a></p>
                                                <p style={{ padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 10 }}>Tel: 443 313 3663</p>
                                            </div>
                                            <img style={{ width: 200, height: 250, borderRadius: 30, borderColor: 'black', borderWidth: 4 }} src={require('../images/contactsImages/2.jpeg')} />
                                        </div>

                                        <div style={{ display: 'inline-block', width: 200, height: 250, position: 'relative', flexDirection: 'row', margin: 4, }}>
                                            <div style={{ flex: 1, width: 200, height: 100, bottom: 0, position: 'absolute', backgroundColor: 'rgba(0, 0, 0, 0.45)', alignSelf: 'flex-end', borderBottomLeftRadius: 30, borderBottomRightRadius: 30 }}>
                                                <p style={{ padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12 }}>Instituto de la Juventud Moreliana</p>
                                                <p style={{ padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12 }}><a target='_blank' href="https://www.facebook.com/ijummorelia/">Página de Facebook</a></p>
                                                <p style={{ padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 10 }}>Tel: 443 312 2735</p>
                                            </div>
                                            <img style={{ width: 200, height: 250, borderRadius: 30, borderColor: 'black', borderWidth: 4 }} src={require('../images/contactsImages/3.jpeg')} />
                                        </div>

                                        <div style={{ display: 'inline-block', width: 200, height: 250, position: 'relative', flexDirection: 'row', margin: 4, }}>
                                            <div style={{ flex: 1, width: 200, height: 100, bottom: 0, position: 'absolute', backgroundColor: 'rgba(0, 0, 0, 0.45)', alignSelf: 'flex-end', borderBottomLeftRadius: 30, borderBottomRightRadius: 30 }}>
                                                <p style={{ padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12 }}>Centro de Atención Clínica e Investigación en Salud Mental</p>
                                                <p style={{ padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12 }}><a target='_blank' href="https://www.cacisme.com/">Página Web</a></p>
                                                <p style={{ padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 10 }}>Tel: 443 312 3705</p>
                                            </div>
                                            <img style={{ width: 200, height: 250, borderRadius: 30, borderColor: 'black', borderWidth: 4 }} src={require('../images/contactsImages/4.jpeg')} />
                                        </div>

                                        <div style={{ display: 'inline-block', width: 200, height: 250, position: 'relative', flexDirection: 'row', margin: 4, }}>
                                            <div style={{ flex: 1, width: 200, height: 100, bottom: 0, position: 'absolute', backgroundColor: 'rgba(0, 0, 0, 0.45)', alignSelf: 'flex-end', borderBottomLeftRadius: 30, borderBottomRightRadius: 30 }}>
                                                <p style={{ padding: 2, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12 }}>Centro Especializado En Salud Mental Y Psiq Sumando Esfuerzos IAP</p>
                                                <p style={{ padding: 2, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12 }}><a target='_blank' href="https://www.facebook.com/Centro-Especializado-En-Salud-Mental-Y-Psiq-Sumando-Esfuerzos-IAP-198440957383235/">Página de Facebook</a></p>
                                                <p style={{ padding: 2, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 10 }}>Tel: 443 313 3232</p>
                                            </div>
                                            <img style={{ width: 200, height: 250, borderRadius: 30, borderColor: 'black', borderWidth: 4 }} src={require('../images/contactsImages/5.jpeg')} />
                                        </div>
                                    </div>

                                    <h4 style={{ color: 'white', textAlign: 'center', paddingTop: 20, textShadow: '0 0 0.3em royalblue' }}>Instituciones de Educación</h4>

                                    <div style={{ display: 'flex', justifyContent: 'left', overflowX: 'scroll' }}>
                                        <div style={{ display: 'inline-block', width: 200, height: 250, position: 'relative', flexDirection: 'row', margin: 4, }}>
                                            <div style={{ flex: 1, width: 200, height: 100, bottom: 0, position: 'absolute', backgroundColor: 'rgba(0, 0, 0, 0.45)', alignSelf: 'flex-end', borderBottomLeftRadius: 30, borderBottomRightRadius: 30 }}>
                                                <p style={{ padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12 }}>Universidad Michoacana de San Nicolás de Hidalgo</p>
                                                <p style={{ padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12 }}><a target='_blank' href="https://www.umich.mx/ ">Página Web</a></p>
                                                <p style={{ padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 10 }}>Tel: 443 322 3500</p>
                                            </div>
                                            <img style={{ width: 200, height: 250, borderRadius: 30, borderColor: 'black', borderWidth: 4 }} src={require('../images/contactsImages/6.jpeg')} />
                                        </div>

                                        <div style={{ display: 'inline-block', width: 200, height: 250, position: 'relative', flexDirection: 'row', margin: 4, }}>
                                            <div style={{ flex: 1, width: 200, height: 100, bottom: 0, position: 'absolute', backgroundColor: 'rgba(0, 0, 0, 0.45)', alignSelf: 'flex-end', borderBottomLeftRadius: 30, borderBottomRightRadius: 30 }}>
                                                <p style={{ padding: 2, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12 }}>Facultad de Contaduría y Ciencias Administrativas UMSNH</p>
                                                <p style={{ padding: 2, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12 }}><a target='_blank' href="https://www.fcca.umich.mx/">Página Web</a></p>
                                                <p style={{ padding: 2, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 10 }}>Tel: 443 299 4370</p>
                                            </div>
                                            <img style={{ width: 200, height: 250, borderRadius: 30, borderColor: 'black', borderWidth: 4 }} src={require('../images/contactsImages/7.png')} />
                                        </div>

                                        <div style={{ display: 'inline-block', width: 200, height: 250, position: 'relative', flexDirection: 'row', margin: 4, }}>
                                            <div style={{ flex: 1, width: 200, height: 100, bottom: 0, position: 'absolute', backgroundColor: 'rgba(0, 0, 0, 0.45)', alignSelf: 'flex-end', borderBottomLeftRadius: 30, borderBottomRightRadius: 30 }}>
                                                <p style={{ padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12 }}>Facultad de Psicología UMSNH</p>
                                                <p style={{ padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12 }}><a target='_blank' href="http://www.psicologia.umich.mx/">Página Web</a></p>
                                                <p style={{ padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 10 }}>Tel: 443 312 9909</p>
                                            </div>
                                            <img style={{ width: 200, height: 250, borderRadius: 30, borderColor: 'black', borderWidth: 4 }} src={require('../images/contactsImages/8.jpeg')} />
                                        </div>

                                        <div style={{ display: 'inline-block', width: 200, height: 250, position: 'relative', flexDirection: 'row', margin: 4, }}>
                                            <div style={{ flex: 1, width: 200, height: 100, bottom: 0, position: 'absolute', backgroundColor: 'rgba(0, 0, 0, 0.45)', alignSelf: 'flex-end', borderBottomLeftRadius: 30, borderBottomRightRadius: 30 }}>
                                                <p style={{ padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12 }}>Facultad de Ciencias Médicas Y Biológicas UMSNH</p>
                                                <p style={{ padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12 }}><a target='_blank' href="https://www.fcmb.umich.mx/">Página Web</a></p>
                                                <p style={{ padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 10 }}>Tel: 443 312 0014</p>
                                            </div>
                                            <img style={{ width: 200, height: 250, borderRadius: 30, borderColor: 'black', borderWidth: 4 }} src={require('../images/contactsImages/9.jpeg')} />
                                        </div>

                                        <div style={{ display: 'inline-block', width: 200, height: 250, position: 'relative', flexDirection: 'row', margin: 4, }}>
                                            <div style={{ flex: 1, width: 200, height: 100, bottom: 0, position: 'absolute', backgroundColor: 'rgba(0, 0, 0, 0.45)', alignSelf: 'flex-end', borderBottomLeftRadius: 30, borderBottomRightRadius: 30 }}>
                                                <p style={{ padding: 2, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12 }}>Departamento de Salud Mental de la Facultad de Medicina UMSNH</p>
                                                <p style={{ padding: 2, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12 }}><a target='_blank' href="https://www.facebook.com/Departamento-de-Salud-Mental-de-la-Facultad-de-Medicina-UMSNH-528818380462687/">Página de Facebook</a></p>
                                                <p style={{ padding: 2, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 10 }}>Tel: 312 001 4398</p>
                                            </div>
                                            <img style={{ width: 200, height: 250, borderRadius: 30, borderColor: 'black', borderWidth: 4 }} src={require('../images/contactsImages/10.png')} />
                                        </div>

                                        <div style={{ display: 'inline-block', width: 200, height: 250, position: 'relative', flexDirection: 'row', margin: 4, }}>
                                            <div style={{ flex: 1, width: 200, height: 100, bottom: 0, position: 'absolute', backgroundColor: 'rgba(0, 0, 0, 0.45)', alignSelf: 'flex-end', borderBottomLeftRadius: 30, borderBottomRightRadius: 30 }}>
                                                <p style={{ padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12 }}>Bachillerato UMSNH</p>
                                                <p style={{ padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12 }}><a target='_blank' href="https://www.facebook.com/Bachillerato-UMSNH-108763154583427/">Página de Facebook</a></p>
                                                <p style={{ padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 10 }}>Tel: 443 322 2705</p>
                                            </div>
                                            <img style={{ width: 200, height: 250, borderRadius: 30, borderColor: 'black', borderWidth: 4 }} src={require('../images/contactsImages/11.jpeg')} />
                                        </div>

                                        <div style={{ display: 'inline-block', width: 200, height: 250, position: 'relative', flexDirection: 'row', margin: 4, }}>
                                            <div style={{ flex: 1, width: 200, height: 100, bottom: 0, position: 'absolute', backgroundColor: 'rgba(0, 0, 0, 0.45)', alignSelf: 'flex-end', borderBottomLeftRadius: 30, borderBottomRightRadius: 30 }}>
                                                <p style={{ padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12 }}>UNAM Campus Morelia</p>
                                                <p style={{ padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12 }}><a target='_blank' href="https://www.facebook.com/UNAM.Morelia">Página de Facebook</a></p>
                                                <p style={{ padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 10 }}>Tel: 443 322 3500</p>
                                            </div>
                                            <img style={{ width: 200, height: 250, borderRadius: 30, borderColor: 'black', borderWidth: 4 }} src={require('../images/contactsImages/12.jpeg')} />
                                        </div>
                                    </div>

                                    <h4 style={{ color: 'white', textAlign: 'center', paddingTop: 20, textShadow: '0 0 0.3em royalblue' }}>Salud y Hospitales</h4>

                                    <div style={{ display: 'flex', justifyContent: 'left', overflowX: 'scroll' }}>
                                        <div style={{ display: 'inline-block', width: 200, height: 250, position: 'relative', flexDirection: 'row', margin: 4, }}>
                                            <div style={{ flex: 1, width: 200, height: 100, bottom: 0, position: 'absolute', backgroundColor: 'rgba(0, 0, 0, 0.45)', alignSelf: 'flex-end', borderBottomLeftRadius: 30, borderBottomRightRadius: 30 }}>
                                                <p style={{ padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12 }}>Secretaría de Salud de Michoacán</p>
                                                <p style={{ padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12 }}><a target='_blank' href="https://www.facebook.com/SaludMich">Página de Facebook</a></p>
                                                <p style={{ padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 10 }}>Tel: 443 312 0514</p>
                                            </div>
                                            <img style={{ width: 200, height: 250, borderRadius: 30, borderColor: 'black', borderWidth: 4 }} src={require('../images/contactsImages/13.jpeg')} />
                                        </div>

                                        <div style={{ display: 'inline-block', width: 200, height: 250, position: 'relative', flexDirection: 'row', margin: 4, }}>
                                            <div style={{ flex: 1, width: 200, height: 100, bottom: 0, position: 'absolute', backgroundColor: 'rgba(0, 0, 0, 0.45)', alignSelf: 'flex-end', borderBottomLeftRadius: 30, borderBottomRightRadius: 30 }}>
                                                <p style={{ padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12 }}>Hospital General “Dr. Miguel Silva” de Morelia</p>
                                                <p style={{ padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12 }}><a target='_blank' href="www.salud.michoacan.gob.mx">Página Web</a></p>
                                                <p style={{ padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 10 }}>Tel: 443 689 2609</p>
                                            </div>
                                            <img style={{ width: 200, height: 250, borderRadius: 30, borderColor: 'black', borderWidth: 4 }} src={require('../images/contactsImages/14.jpeg')} />
                                        </div>

                                        <div style={{ display: 'inline-block', width: 200, height: 250, position: 'relative', flexDirection: 'row', margin: 4, }}>
                                            <div style={{ flex: 1, width: 200, height: 100, bottom: 0, position: 'absolute', backgroundColor: 'rgba(0, 0, 0, 0.45)', alignSelf: 'flex-end', borderBottomLeftRadius: 30, borderBottomRightRadius: 30 }}>
                                                <p style={{ padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12 }}>Secretaría de Bien Común y Política Social Morelia</p>
                                                <p style={{ padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12 }}><a target='_blank' href="https://www.facebook.com/BienyPoliticaSocial">Página de Facebook</a></p>
                                                <p style={{ padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 10 }}>Tel: 443 322 0710</p>
                                            </div>
                                            <img style={{ width: 200, height: 250, borderRadius: 30, borderColor: 'black', borderWidth: 4 }} src={require('../images/contactsImages/15.png')} />
                                        </div>

                                        <div style={{ display: 'inline-block', width: 200, height: 250, position: 'relative', flexDirection: 'row', margin: 4, }}>
                                            <div style={{ flex: 1, width: 200, height: 100, bottom: 0, position: 'absolute', backgroundColor: 'rgba(0, 0, 0, 0.45)', alignSelf: 'flex-end', borderBottomLeftRadius: 30, borderBottomRightRadius: 30 }}>
                                                <p style={{ padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12 }}>IMSS Hospital General Regional 1 Charo</p>
                                                <p style={{ padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12 }}><a target='_blank' href="https://www.facebook.com/HGRNo1Charo">Página de Facebook</a></p>
                                                <p style={{ padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 10 }}>Tel: 443 310 9950</p>
                                            </div>
                                            <img style={{ width: 200, height: 250, borderRadius: 30, borderColor: 'black', borderWidth: 4 }} src={require('../images/contactsImages/16.jpeg')} />
                                        </div>

                                        <div style={{ display: 'inline-block', width: 200, height: 250, position: 'relative', flexDirection: 'row', margin: 4, }}>
                                            <div style={{ flex: 1, width: 200, height: 100, bottom: 0, position: 'absolute', backgroundColor: 'rgba(0, 0, 0, 0.45)', alignSelf: 'flex-end', borderBottomLeftRadius: 30, borderBottomRightRadius: 30 }}>
                                                <p style={{ padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12 }}>Sistema DIF Michoacán</p>
                                                <p style={{ padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12 }}><a target='_blank' href="https://www.facebook.com/difmich">Página de Facebook</a></p>
                                                <p style={{ padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 10 }}>Tel: 443 313 3540</p>
                                            </div>
                                            <img style={{ width: 200, height: 250, borderRadius: 30, borderColor: 'black', borderWidth: 4 }} src={require('../images/contactsImages/17.jpeg')} />
                                        </div>

                                        <div style={{ display: 'inline-block', width: 200, height: 250, position: 'relative', flexDirection: 'row', margin: 4, }}>
                                            <div style={{ flex: 1, width: 200, height: 100, bottom: 0, position: 'absolute', backgroundColor: 'rgba(0, 0, 0, 0.45)', alignSelf: 'flex-end', borderBottomLeftRadius: 30, borderBottomRightRadius: 30 }}>
                                                <p style={{ padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12 }}>DIF Morelia</p>
                                                <p style={{ padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12 }}><a target='_blank' href="https://www.facebook.com/DIFMorelia/">Página de Facebook</a></p>
                                                <p style={{ padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 10 }}>Tel: 443 113 4000</p>
                                            </div>
                                            <img style={{ width: 200, height: 250, borderRadius: 30, borderColor: 'black', borderWidth: 4 }} src={require('../images/contactsImages/18.jpeg')} />
                                        </div>
                                    </div>

                                    <h4 style={{ color: 'white', textAlign: 'center', paddingTop: 20, textShadow: '0 0 0.3em royalblue' }}>Instituciones para la Igualdad de Género</h4>

                                    <div style={{ display: 'flex', justifyContent: 'left', overflowX: 'scroll' }}>
                                        <div style={{ display: 'inline-block', width: 200, height: 250, position: 'relative', flexDirection: 'row', margin: 4, }}>
                                            <div style={{ flex: 1, width: 200, height: 100, bottom: 0, position: 'absolute', backgroundColor: 'rgba(0, 0, 0, 0.45)', alignSelf: 'flex-end', borderBottomLeftRadius: 30, borderBottomRightRadius: 30 }}>
                                                <p style={{ padding: 2, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12 }}>Secretaría de Igualdad Sustantiva y Desarrollo de las Mujeres</p>
                                                <p style={{ padding: 2, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12 }}><a target='_blank' href="https://www.facebook.com/SeMujerMich">Página de Facebook</a></p>
                                                <p style={{ padding: 2, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 10 }}>Tel: 443 582 2082</p>
                                            </div>
                                            <img style={{ width: 200, height: 250, borderRadius: 30, borderColor: 'black', borderWidth: 4 }} src={require('../images/contactsImages/19.png')} />
                                        </div>

                                        <div style={{ display: 'inline-block', width: 200, height: 250, position: 'relative', flexDirection: 'row', margin: 4, }}>
                                            <div style={{ flex: 1, width: 200, height: 100, bottom: 0, position: 'absolute', backgroundColor: 'rgba(0, 0, 0, 0.45)', alignSelf: 'flex-end', borderBottomLeftRadius: 30, borderBottomRightRadius: 30 }}>
                                                <p style={{ padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12 }}>Instituto de la Mujer Moreliana para la Igualdad Sustantiva</p>
                                                <p style={{ padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12 }}><a target='_blank' href="https://www.facebook.com/ImmujerisMorelia">Página de Facebook</a></p>
                                                <p style={{ padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 10 }}>Tel: 443 232 7000</p>
                                            </div>
                                            <img style={{ width: 200, height: 250, borderRadius: 30, borderColor: 'black', borderWidth: 4 }} src={require('../images/contactsImages/20.jpeg')} />
                                        </div>

                                        <div style={{ display: 'inline-block', width: 200, height: 250, position: 'relative', flexDirection: 'row', margin: 4, }}>
                                            <div style={{ flex: 1, width: 200, height: 100, bottom: 0, position: 'absolute', backgroundColor: 'rgba(0, 0, 0, 0.45)', alignSelf: 'flex-end', borderBottomLeftRadius: 30, borderBottomRightRadius: 30 }}>
                                                <p style={{ padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12 }}>Equidad de Género UMSNH</p>
                                                <p style={{ padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12 }}><a target='_blank' href="https://www.umich.mx/iniciativas/equidadgenero/">Página Web</a></p>
                                                <p style={{ padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 10 }}>Tel: 443 322 3500</p>
                                            </div>
                                            <img style={{ width: 200, height: 250, borderRadius: 30, borderColor: 'black', borderWidth: 4 }} src={require('../images/contactsImages/21.jpeg')} />
                                        </div>

                                        <div style={{ display: 'inline-block', width: 200, height: 250, position: 'relative', flexDirection: 'row', margin: 4, }}>
                                            <div style={{ flex: 1, width: 200, height: 100, bottom: 0, position: 'absolute', backgroundColor: 'rgba(0, 0, 0, 0.45)', alignSelf: 'flex-end', borderBottomLeftRadius: 30, borderBottomRightRadius: 30 }}>
                                                <p style={{ padding: 2, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12 }}>Comisión Interna para la Igualdad de Género UNAM ENES Morelia</p>
                                                <p style={{ padding: 2, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12 }}><a target='_blank' href="https://www.facebook.com/cinigenesmorelia/">Página de Facebook</a></p>
                                                <p style={{ padding: 2, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 10 }}>Tel: 443 322 2705</p>
                                            </div>
                                            <img style={{ width: 200, height: 250, borderRadius: 30, borderColor: 'black', borderWidth: 4 }} src={require('../images/contactsImages/22.jpeg')} />
                                        </div>

                                        <div style={{ display: 'inline-block', width: 200, height: 250, position: 'relative', flexDirection: 'row', margin: 4, }}>
                                            <div style={{ flex: 1, width: 200, height: 100, bottom: 0, position: 'absolute', backgroundColor: 'rgba(0, 0, 0, 0.45)', alignSelf: 'flex-end', borderBottomLeftRadius: 30, borderBottomRightRadius: 30 }}>
                                                <p style={{ padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12 }}>Mujeres Empoderadas A.C.</p>
                                                <p style={{ padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12 }}><a target='_blank' href="https://www.facebook.com/mujeresempoderadasac/">Página de Facebook</a></p>
                                                <p style={{ padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 10 }}>Tel: 333 314 8265</p>
                                            </div>
                                            <img style={{ width: 200, height: 250, borderRadius: 30, borderColor: 'black', borderWidth: 4 }} src={require('../images/contactsImages/23.jpeg')} />
                                        </div>
                                    </div>

                                    <h4 style={{ color: 'white', textAlign: 'center', paddingTop: 20, textShadow: '0 0 0.3em royalblue' }}>Gobierno</h4>

                                    <div style={{ display: 'flex', justifyContent: 'left', overflowX: 'scroll' }}>
                                        <div style={{ display: 'inline-block', width: 200, height: 250, position: 'relative', flexDirection: 'row', margin: 4, }}>
                                            <div style={{ flex: 1, width: 200, height: 100, bottom: 0, position: 'absolute', backgroundColor: 'rgba(0, 0, 0, 0.45)', alignSelf: 'flex-end', borderBottomLeftRadius: 30, borderBottomRightRadius: 30 }}>
                                                <p style={{ padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12 }}>Gobierno de Michoacán</p>
                                                <p style={{ padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12 }}><a target='_blank' href="https://www.facebook.com/gobmichoacan">Página de Facebook</a></p>
                                                <p style={{ padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 10 }}>Tel: 443 317 1481</p>
                                            </div>
                                            <img style={{ width: 200, height: 250, borderRadius: 30, borderColor: 'black', borderWidth: 4 }} src={require('../images/contactsImages/24.png')} />
                                        </div>

                                        <div style={{ display: 'inline-block', width: 200, height: 250, position: 'relative', flexDirection: 'row', margin: 4, }}>
                                            <div style={{ flex: 1, width: 200, height: 100, bottom: 0, position: 'absolute', backgroundColor: 'rgba(0, 0, 0, 0.45)', alignSelf: 'flex-end', borderBottomLeftRadius: 30, borderBottomRightRadius: 30 }}>
                                                <p style={{ padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12 }}>H. Ayuntamiento de Morelia</p>
                                                <p style={{ padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12 }}><a target='_blank' href="https://www.facebook.com/MoreliaGob/">Página de Facebook</a></p>
                                                <p style={{ padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 10 }}>Tel: 443 322 9511</p>
                                            </div>
                                            <img style={{ width: 200, height: 250, borderRadius: 30, borderColor: 'black', borderWidth: 4 }} src={require('../images/contactsImages/25.jpeg')} />
                                        </div>
                                    </div>



                                </div>
                            </div>}
                    />
                </MediaServerRender>
            </div>

        )
    }
}

export default ContactsDesign;