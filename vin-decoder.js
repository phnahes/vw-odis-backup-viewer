// VW VIN Decoder - Decodificador de VIN da Volkswagen
// Integrado automaticamente no ODIS ANP Decoder

class VWVINDecoder {
    constructor() {
        this.yearMap = {
            'A': 2010, 'B': 2011, 'C': 2012, 'D': 2013, 'E': 2014, 'F': 2015, 'G': 2016, 'H': 2017, 'J': 2018, 'K': 2019,
            'L': 2020, 'M': 2021, 'N': 2022, 'P': 2023, 'R': 2024, 'S': 2025, 'T': 2026, 'V': 2027, 'W': 2028, 'X': 2029,
            'Y': 2030, '1': 2031, '2': 2032, '3': 2033, '4': 2034, '5': 2035, '6': 2036, '7': 2037, '8': 2038, '9': 2039
        };

        this.plantCodes = {
            'A': 'Ingolstadt', 'B': 'Brussels', 'C': 'Chattanooga', 'D': 'Dresden', 'E': 'Emden',
            'F': 'Puebla', 'G': 'Graz', 'H': 'Hannover', 'J': 'Palmela', 'K': 'Osnabrück',
            'L': 'Luton', 'M': 'Puebla', 'N': 'Neckarsulm', 'P': 'Mosel', 'R': 'Martorell',
            'S': 'Salamanca', 'T': 'Taubaté', 'U': 'Uitenhage', 'V': 'Palmela', 'W': 'Wolfsburg',
            'X': 'Poznań', 'Y': 'Navarra', 'Z': 'Zwickau'
        };

        this.wmiHints = {
            'WVW': 'Volkswagen Passenger Cars',
            'WV1': 'Volkswagen Commercial Vehicles',
            'WV2': 'Volkswagen Commercial Vehicles',
            '1VW': 'Volkswagen USA',
            '3VW': 'Volkswagen Mexico',
            '9BW': 'Volkswagen Brazil'
        };

        this.vwModels = {
            'AH': 'Polo', 'AJ': 'Polo GTS', 'AK': 'Polo', 'AL': 'Polo',
            'BJ': 'T-Cross', 'BK': 'T-Cross', 'BL': 'T-Cross',
            'CG': 'Golf', 'CH': 'Golf', 'CJ': 'Golf', 'CK': 'Golf',
            'DM': 'Jetta', 'DN': 'Jetta', 'DP': 'Jetta',
            'EH': 'Passat', 'EJ': 'Passat', 'EK': 'Passat',
            'FG': 'Tiguan', 'FH': 'Tiguan', 'FJ': 'Tiguan',
            'GH': 'Arteon', 'GJ': 'Arteon',
            'HH': 'ID.3', 'HJ': 'ID.4', 'HK': 'ID.4',
            'JH': 'Touareg', 'JJ': 'Touareg',
            'KH': 'Amarok', 'KJ': 'Amarok'
        };
    }

    decodeVIN(vin) {
        if (!vin || vin.length !== 17) {
            return { error: 'VIN inválido - deve ter 17 caracteres' };
        }

        const result = {
            vin: vin,
            wmi: vin.substring(0, 3),
            vds: vin.substring(3, 9),
            vis: vin.substring(9, 17),
            year: this.getYear(vin.charAt(9)),
            plant: this.getPlant(vin.charAt(10)),
            manufacturer: this.getManufacturer(vin.substring(0, 3)),
            model: this.inferModel(vin),
            serialNumber: vin.substring(11, 17),
            isValid: this.validateVIN(vin)
        };

        return result;
    }

    getYear(yearChar) {
        return this.yearMap[yearChar] || 'Desconhecido';
    }

    getPlant(plantChar) {
        return this.plantCodes[plantChar] || 'Desconhecido';
    }

    getManufacturer(wmi) {
        return this.wmiHints[wmi] || 'Volkswagen';
    }

    inferModel(vin) {
        const wmi = vin.substring(0, 3);
        const vds = vin.substring(3, 9);

        // Verificar hints específicos do WMI
        if (wmi === '9BW') {
            // VINs brasileiros - padrões específicos
            if (vds.startsWith('AH')) return 'Polo';
            if (vds.startsWith('AJ')) return 'Polo GTS';
            if (vds.startsWith('BJ')) return 'T-Cross';
        }

        // Verificar padrões VDS
        const vdsPrefix = vds.substring(0, 2);
        if (this.vwModels[vdsPrefix]) {
            return this.vwModels[vdsPrefix];
        }

        return 'Modelo não identificado';
    }

    validateVIN(vin) {
        if (!vin || vin.length !== 17) return false;
        
        // Verificar caracteres válidos
        const validChars = /^[A-HJ-NPR-Z0-9]+$/;
        if (!validChars.test(vin)) return false;

        // Verificar posição 9 (check digit)
        return this.calculateCheckDigit(vin);
    }

    calculateCheckDigit(vin) {
        const weights = [8, 7, 6, 5, 4, 3, 2, 10, 0, 9, 8, 7, 6, 5, 4, 3, 2];
        const transliteration = {
            'A': 1, 'B': 2, 'C': 3, 'D': 4, 'E': 5, 'F': 6, 'G': 7, 'H': 8,
            'J': 1, 'K': 2, 'L': 3, 'M': 4, 'N': 5, 'P': 7, 'R': 9,
            'S': 2, 'T': 3, 'U': 4, 'V': 5, 'W': 6, 'X': 7, 'Y': 8, 'Z': 9
        };

        let sum = 0;
        for (let i = 0; i < 17; i++) {
            let value = vin[i];
            if (isNaN(value)) {
                value = transliteration[value] || 0;
            } else {
                value = parseInt(value);
            }
            sum += value * weights[i];
        }

        const checkDigit = sum % 11;
        const expectedCheckDigit = checkDigit === 10 ? 'X' : checkDigit.toString();
        
        return vin[8] === expectedCheckDigit;
    }

    formatDecodedInfo(decodedVIN) {
        if (decodedVIN.error) {
            return `<div class="vin-error">❌ ${decodedVIN.error}</div>`;
        }

        return `
            <div class="vin-decoded-info">
                <div class="vin-details">
                    <div class="vin-item">
                        <span class="vin-label">Fabricante:</span>
                        <span class="vin-value">${decodedVIN.manufacturer}</span>
                    </div>
                    <div class="vin-item">
                        <span class="vin-label">Modelo:</span>
                        <span class="vin-value">${decodedVIN.model}</span>
                    </div>
                    <div class="vin-item">
                        <span class="vin-label">Ano:</span>
                        <span class="vin-value">${decodedVIN.year}</span>
                    </div>
                    <div class="vin-item">
                        <span class="vin-label">Planta:</span>
                        <span class="vin-value">${decodedVIN.plant}</span>
                    </div>
                    <div class="vin-item">
                        <span class="vin-label">Número de Série:</span>
                        <span class="vin-value">${decodedVIN.serialNumber}</span>
                    </div>
                </div>
            </div>
        `;
    }
}

// Instância global do decoder
window.vwVINDecoder = new VWVINDecoder();
