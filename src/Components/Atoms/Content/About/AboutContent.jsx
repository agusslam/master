import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import '../About/AboutContent.css'
import ImageBanner2 from '../../../../Assets/Images/BG_KPR_2.png'
import ImageBanner3 from '../../../../Assets/Images/bgdashboard.png'
import ImageBanner4 from '../../../../Assets/Images/sbisnis.png'


class AboutC extends React.Component {
    render() {
        return (
            <Container fluid={true}>
                <Row>
                    <Col md="12" className="title-about"><h1>Riwayat Singkat Bank KB Bukopin</h1></Col>
                    <Col md="12" className="wrap-text2" style={{ backgroundImage: `url(${ImageBanner2})` }}>
                        <p className="wrap-text-tentang2">Highlights :</p>
                        <p className="wrap-text-tentang">
                            1. Bank Bukopin beroperasi di 23 provinsi, memiliki 43 kantor cabang utama, 174 kantor cabang pembantu,
                            116 kantor kas, 38 kantor fungsional (layanan mikro), 24 payment point, 8 layanan pickup service, serta
                            didukung oleh lebih dari 31.000 unit PPOB.
                        </p>
                        <p className="wrap-text-tentang">
                            2. Perseroan terus melakukan transformasi dan inovasi menuju perusahaan jasa keuangan terintegrasi
                            berbasis teknologi digital dengan mendukung percepatan ekosistem StartUp di Indonesia.
                        </p>
                    </Col>
                    <Col md="12" className="wrap-text2" style={{ backgroundImage: `url(${ImageBanner3})` }}>
                        <p className="wrap-text-tentang">
                            Bank Bukopin didirikan pada tanggal 10 Juli 1970 dengan nama Bank Umum Koperasi Indonesia (disingkat
                            Bukopin). Bank mulai melakukanusaha komersial sebagai bank umum koperasi di Indonesia sejak tanggal
                            16 Maret 1971.</p>
                        <p className="wrap-text-tentang">
                            Kegiatan usaha Bukopin awalnya mencakup segala kegiatan bank umum sebagaimana dimaksud dalam
                            Undang-Undang Perbankan dengan tujuan utama memperhatikan dan melayani kepentingan gerakan koperasi
                            di Indonesia sesuai dengan Undang-Undang Perkoperasian yang berlaku.
                            Bukopin kemudian melakukan penggabungan usaha dengan beberapa bank umum koperasi. Perubahan nama
                            Bank Umum Koperasi Indonesia (Bukopin) menjadi Bank Bukopin disahkan dalam Rapat Anggota Bank Umum
                            Koperasi Indonesia yang dituangkan dalam surat No. 03/RA/XII/89 tanggaI 2 Januari 1990.
                            Pada perkembangan selanjutnya, status badan hukum Bank Bukopin kemudian berubah dari koperasi menjadi
                            perseroan terbatas.</p>
                        <p className="wrap-text-tentang">
                            Bank Bukopin memulai kegiatan usaha dalam bentuk perseroan terbatas pada tanggal 1 Juli 1993.
                            Bank Bukopin terus memperkuat pelayanan dan infrastruktur untuk mengoptimalkan layanan kepada nasabah.
                            Seluruh kantor Bank Bukopin telah terhubung dalam satu jaringan real time online. Untuk mendukung layanan
                            ke nasabah, Bank Bukopin juga mengoperasikan 881 mesin ATM. Kartu ATM Bukopin terkoneksi dengan
                            seluruh jaringan ATM di Tanah Air.</p>
                        <p className="wrap-text-tentang">
                            Agar semakin memudahkan nasabah, Perseroan juga menjalin kerjasama dengan bank-bank dan lembaga
                            lainnya, sehingga pemegang Kartu Bukopin dapat melakukan berbagai aktivitas perbankan di hampir seluruh
                            ATM bank apapun di Indonesia, termasuk semua ATM pada jaringan ATM Plus, ATM Bersama, dan ATM
                            BCA Prima. Perseroan juga memiliki dua anak perusahaan, yaitu PT Bank Syariah Bukopin dan PT Bukopin
                            Finance, dengan hasil usaha yang dikonsolidasikan ke dalam Laporan Keuangan Bank Bukopin. PT Bukopin
                            Finance (d/h PT Indo Trans Buana Multi Finance) didirikan pada tanggal 11 Maret 1983, merupakan
                            perusahaan yang bergerak di bidang pembiayaan sewa guna usaha dan multifinance.
                            Sedangkan Bank Syariah Bukopin (d/h PT Bank Persyarikatan Indonesia), didirikan pada tanggal 11 September
                            1990 yang bergerak dibidang perbankan berbasis syariah.</p>
                        <p className="wrap-text-tentang">
                            Untuk mengantisipasi evolusi bisnis di sektor perbankan, Perseroan terus melakukan transformasi dan inovasi
                            menuju perusahaan jasa keuangan terintegrasi berbasis teknologi digital dengan mendukung percepatan
                            ekosistem StartUp di Indonesia. Bank Bukopinmenginisiasi program pembinaan dan edukasi calon pendiri
                            StartUp di bidang fintech melalui kolaborasi dalam bentuk BNV (Bukopin Innovation Labs).
                        </p>
                    </Col>
                    <Col md="12" className="title-about-2"><h1>Visi Bank KB Bukopin</h1></Col>
                    <Col md="12" className="wrap-text-tentang3"><p>Menjadi Lembaga Keuangan Pilihan Utama di Indonesia.</p></Col>
                    <Col md="12" className="title-about-2"><h1>Misi Bank KB Bukopin</h1></Col>
                    <Col md="12" className="wrap-text-tentang3"><p>Memahami dan Memberi Solusi kepada Nasabah.</p></Col>
                    <Col md="12" className="title-about-2"><h1>SEGMEN BISNIS</h1></Col>
                    <Col md="12" className="wrap-text2">
                        <p className="wrap-text-tentang-pad">Bank Bukopin menjalankan kegiatan usaha berupa penghimpunan dana dan penyaluran kredit yang fokus
                            pada empat pilar utama yaitu bisnis Mikro, Usaha Kecil dan Menengah (UKM), Bisnis Konsumer serta Bisnis
                            Komersial.
                        </p>
                    </Col>
                    <Col md="12" className="wrap-img-bisnis">
                        <div className="img-bisnis" style={{ backgroundImage: `url(${ImageBanner4})` }}></div>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default AboutC