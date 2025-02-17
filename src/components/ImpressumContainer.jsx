import React from 'react'

function ImpressumContainer({...restProps}) {
    return (
        <section {...restProps}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="impressum-content">
                            {/* <h1 style={{fontWeight: "bold", fontFamily:"Montserrat"}}>Impressum</h1><br/> */}
                            <h4 style={{fontWeight: "bold", fontFamily:"Montserrat"}}>Gemäß § 5 TMG</h4>
                            <p>Stephane Tchuente Kamwa</p>
                            <p>Heidelberger Landstraße 52A</p>
                            <p>64297 Darmstadt</p><br/>
                            <h4 style={{fontWeight: "bold", fontFamily:"Montserrat"}}>Kontakt</h4>
                            <p>Telefon: <a href='https://wa.me/4915752069252' target='_blank'>+49 1575 2069252</a></p>
                            <p>E-Mail: <a href='mailto:contact@theplug-group.com'>contact@theplug-group.com</a></p><br/>
                            <h4 style={{fontWeight: "bold", fontFamily:"Montserrat"}}>Umsatzsteuer-Identifikationsnummer</h4>
                            <p>Kleinunternehmer nach § 19 UStG</p><br/>
                            <h4 style={{fontWeight: "bold", fontFamily:"Montserrat"}}>Streitschlichtung in der EU</h4>
                            <p>Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: <a href="https://ec.europa.eu/consumers/odr/" target='_blank'>https://ec.europa.eu/consumers/odr/</a>.</p>
                            <p>Die E-Mail-Adresse finden Sie oben im Impressum.</p><br/>
                            <h4 style={{fontWeight: "bold", fontFamily:"Montserrat"}}>Verbraucherstreitbeilegung / Universalschlichtungsstelle</h4>
                            <p>Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
                            <p>Quelle: eRecht24</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ImpressumContainer
