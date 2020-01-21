import wifiPineapple from '../assets/img/images/wifiPineapple.jpg'
import stapler from '../assets/img/images/stapler.jpg'
import smokeDetector from '../assets/img/images/smokeDetector.jpg'
import ceilingFan from '../assets/img/images/ceilingFan.jpg'

import cielingFanPDF from '../assets/pdf/ceilingFan.pdf'
import smokeDetectorPDF from '../assets/pdf/smokeDetector.pdf'
import soapDispenserPDF from '../assets/pdf/soapDispenser.pdf'
import staplerPDF from '../assets/pdf/stapler.pdf'




const scanData = [
    {
        device: 'WiFi Pineapple',
        severity: 'Critical',
        issue_description: 'Rogue WiFi device identified',
        ip_address: '192.168.0.42',
        user_manual: {
            file: soapDispenserPDF,
            pages: 3
        },
        imgSrc: wifiPineapple
    },
    {
        device: 'Hexometer Smart Smoke Detector',
        severity: 'Moderate',
        issue_description: 'XML injection',
        ip_address: '192.168.0.48',

        user_manual: {
            file: smokeDetectorPDF,
            pages: 2
        },
        imgSrc: smokeDetector
    },
    {
        device: 'SplicePro Smart Staplers',
        severity: 'Moderate',
        issue_description: 'JavaScript injection',
        ip_address: '192.168.0.44',
        user_manual: {
            file: staplerPDF,
            pages: 3
        },
        imgSrc: stapler
    },
    {
        device: 'Pendula Smart ceiling fans',
        severity: 'Low',
        issue_description: 'Cross-domain referrer leakage',
        ip_address: '192.168.0.43',
        user_manual: {
            file: cielingFanPDF,
            pages: 3
        },
        imgSrc: ceilingFan
    },
];


export default scanData