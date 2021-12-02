import React from 'react'

import { Map, GoogleApiWrapper, Marker } from 'google-maps-react'
import { Container, Row, Col } from 'react-bootstrap'
import '../Contact/ContactContent.css'
// import ImageBanner from '../../../../Assets/Images/hubungi_kami.png'
import ImageBanner2 from '../../../../Assets/Images/BG_KPR_2.png'
import ImageBanner3 from '../../../../Assets/Images/bgdashboard.png'

const mapStyles = {
    width: '100%',
    height: '100%',
}

const containerStyle = {
    position: 'relative',  
    width: '100%',
    height: '95%'
  }

class ContactC extends React.Component {
    render() {
        return (
            <Container fluid={true}>
                <Row>
                    <Col md="12" className="title-hubungi"><h1>HUBUNGI KAMI</h1></Col>
                    <Col md="12" className="img-hubungikami2" style={{ backgroundImage: `url(${ImageBanner2})` }}>
                        <Row className="wrapper-alamat">
                            <Col md="6" className="text-alamat">
                                <p>Alamat Kantor Pusat Bank Bukopin :</p>
                                <p>Gedung Bank Bukopin</p>
                                <p>Jl. MT. Haryono Kav. 50-51</p>
                                <p>Jakarta 12770</p>
                                <p>Telp. +6221 798 8266, 798 9837</p>
                                <p>Fax. +6221 798 0625, 798 0238, 798 0244</p>
                                <p>Telex. 62487, 66087</p>
                                <p>SWIFT : BBUKIDJA </p>
                            </Col>
                            <Col md="6" className="map-style">
                                    <Map
                                        google={this.props.google}
                                        zoom={18}
                                        style={mapStyles}
                                        containerStyle={containerStyle}
                                        initialCenter={{lat: -6.243932, lng: 106.8500812}}
                                    >
                                        <Marker position={{ lat: -6.243932, lng: 106.8500812 }} />
                                    </Map>
                            </Col>
                        </Row>
                    </Col>
                    {/* <Col md="12" className="img-wrap">
                        <div className="img-hubungikami" style={{ backgroundImage: `url(${ImageBanner})` }}></div>
                    </Col> */}
                    <Col md="12" className="wrap-text" style={{ backgroundImage: `url(${ImageBanner3})` }}>
                        <p className="wrap-text-contact">
                            Jika anda mempunyai pertanyaan mengenai produk dan layanan Bank Bukopin atau ingin
                            menyampaikan informasi, saran, pengalaman, ataupun keluhan yang dapat memperbaiki kinerja
                            kami, silahkan menghubungi layanan kami dibawah ini:
                        </p>
                        <p className="wrap-text-contact2">
                            1. Informasi korporasi selain layanan produk dan jasa silahkan hubungi corporate secretary
                            atau e-mail: corsec@bukopin.co.id
                        </p>
                        <p className="wrap-text-contact2">
                            2. Sesuai Peraturan Bank Indonesia Nomor 7/7/PBI/2005 tentang penyelesaian pengaduan
                            nasabah, setiap pengaduan mohon dilengkapi dengan foto copy identitas dan dokumen
                            pendukung lainnya.
                        </p>
                        <p className="wrap-text-contact2">
                            3. Jangan pernah menulis user id dan PIN pada saat menyampaikan informasi, saran, atau
                            keluhan Bank Bukopin tidak akan pernah menanyakan user id dan PIN dalam kondisi
                            apapun.
                        </p>
                        <p className="wrap-text-contact2">
                            4. Informasi serta keluhan nasabah atas layanan produk dan jasa (termasuk jaringan kantor
                            dan ATM) silahkan hubungi Halo Bukopin di nomor 14005 atau klik
                        </p>
                        <p className="wrap-text-contact">
                            Perhatian
                        </p>
                        <p className="wrap-text-contact2">
                            1. Setiap Formulir yang telah diisi akan terkirim dengan menekan tombol kirim dan akan
                            diberikan nomor tiket ID.
                        </p>
                        <p className="wrap-text-contact2">
                            2. Mohon data diisi dengan sebenar-benarnya dan pastikan alamat email telah sesuai dan
                            benar
                        </p>
                        <p className="wrap-text-contact2">
                            3. Lampirkan bukti-bukti pendukung yang diperlukan dalam pengaduan dengan
                            menggunakan fasilitas attachment.
                        </p>
                        <p className="wrap-text-contact2">
                            4. Data yang telah diisi akan kami jaga kerahasiannya.
                        </p>
                        <p className="wrap-text-contact">
                            Kami akan sangat berterima kasih apabila anda dapat mencantumkan data pada formulir
                            terlampir dengan jelas dan lengkap agar memudahkan kami untuk menanggapi dan memproses
                            pengajuan yang kami terima.
                            Hanya yang melengkapi data dengan lengkap dan jelas sesuai formulir terlampir di atas yang
                            akan kami layani.
                        </p>
                        <p className="wrap-text-contact">
                            Ket:*Dengan klik “di sini”, akan terbuka form isian pengaduan/permohonan nasabah
                        </p>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default GoogleApiWrapper({ apiKey: 'AIzaSyDMKWQWLBryC4QmsobS6VLbZ6mBqfRaaLQ   ' })(ContactC)