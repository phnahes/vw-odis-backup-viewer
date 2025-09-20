# 🔧 ODIS Backup Decoder - VW

A web-based decoder for Volkswagen ODIS Engineering backup reports, allowing you to visualize and analyze VW vehicle diagnostic data in an organized and intuitive way.

## 📋 Features

### 🚗 Vehicle Information
- **Decoded VIN**: Manufacturer, model, year, plant, and serial number
- **Basic Data**: Mileage, onboard time, MCD project
- **Automatic Validation**: Automatic VIN decoding when available

### ⚙️ ECU Components
- **Complete Identification**: System, software, hardware, part number
- **Visual Status**: Status indicators (OK, Warning, Error)
- **Organized Sections**: Adaptations, coding, and subsystems

### 🔍 Coding Specifications
- **Detailed Bytes**: Formatted display (e.g., `Byte00: 0000 0011 ($03)`)
- **Readable Format**: Binary values with spaces and uppercase hexadecimal
- **Expandable Interface**: Collapsible sections for better organization

### 🔧 Adaptations
- **Grouped Sessions**: Organized by `[VO]_` categories
- **Detailed Values**: `[LO]_` and `[LN]_` parameters with their values
- **Intuitive Navigation**: Expandable hierarchical structure

### 🔗 Subsystems
- **Identification**: Subsystem number and system designation
- **Versions**: Software and technical information
- **Organization**: Grouped by main component

## 🚀 How to Use

### 1. Open the Decoder
```bash
# Clone the repository
git clone https://github.com/phnahes/vw-odis-backup-viewer.git
cd vw-odis-backup-viewer

# Open the file in browser
open index.html
```

### 2. Load File
- **Drag and drop** the ODIS backup file into the indicated area
- **Or click** "Select File" to browse
- **Supported formats**: `.html`, `.htm`, `.xml`

### 3. Navigate Data
- **Expand sections**: Click the `▶` arrows to see details
- **Organized information**: Data grouped by component
- **Responsive interface**: Works on desktop and mobile

## 📁 Project Structure

```
vw-odis-backup-viewer/
├── index.html               # Main interface
├── vin-decoder.js          # VIN decoder
├── README.md               # This file
└── examples/
    ├── *.html             # ODIS HTML files
    └── *.xml              # ODIS XML files
```

## 🛠️ Technologies

- **HTML5**: Modern and responsive interface
- **CSS3**: Styles with CSS variables and grid layout
- **JavaScript ES6+**: Data parsing and DOM manipulation
- **Advanced Regex**: Precise data extraction from reports

## 📊 Supported Formats

### HTML Files (ODIS Engineering)
- Complete diagnostic reports
- Structure with `treeView_content`
- Coding, adaptations, and identification sections

### XML Files (ODIS Protocol)
- Structured XML format
- Elements `<ecu>`, `<ecu_master>`, `<values>`
- Coding data with `bin_value` and `hex_value`

## 🎨 Interface

### Modern Design
- **Light theme**: Soft colors and adequate contrasts
- **Typography**: System fonts and monospace for technical data
- **Icons**: Emojis for quick visual identification

### Responsiveness
- **Desktop**: Grid layout with multiple columns
- **Mobile**: Automatic adaptation for smaller screens
- **Accessibility**: Keyboard navigation and screen readers

## 🔧 Development

### Code Structure
```javascript
// Main functions
extractVehicleInfo()      // Basic vehicle data
extractComponents()       // ECU components
extractCodingSpecs()     // Coding bytes
extractAdaptations()     // Adaptation parameters
extractSubsystems()      // Identified subsystems
```

### Extraction Patterns
- **Robust regex**: Multiple patterns for different structures
- **Fallback**: Alternative patterns for better compatibility
- **Validation**: Data verification before display

## 🤝 Contributing

1. **Fork** the project
2. **Create** a feature branch (`git checkout -b feature/new-feature`)
3. **Commit** your changes (`git commit -am 'Add new feature'`)
4. **Push** to the branch (`git push origin feature/new-feature`)
5. **Open** a Pull Request

## 📝 Changelog

### v1.0.0 (2024-12-19)
- ✅ Initial decoder implementation
- ✅ Support for HTML and XML files
- ✅ Automatic VIN decoding
- ✅ Coding specifications extraction
- ✅ Modern responsive interface
- ✅ Expandable sections for better UX

## 📄 License

This project is licensed under the MIT License. See the `LICENSE` file for more details.

## ⚠️ Disclaimer

This project is an independent tool for diagnostic data analysis. It is not officially affiliated with Volkswagen AG or ODIS Engineering software. Use at your own risk.

---

**Developed with ❤️ for the VW community**

🔗 **Useful Links:**
- [ODIS Engineering](https://www.volkswagen.com)
- [VW Documentation](https://www.volkswagen.com/technical)
- [Issues](https://github.com/phnahes/vw-odis-backup-viewer/issues)
