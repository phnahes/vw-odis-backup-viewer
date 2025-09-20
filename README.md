# 🔧 ODIS Backup Decoder - VW

Um decodificador web para relatórios de backup do ODIS Engineering da Volkswagen, permitindo visualizar e analisar dados de diagnóstico de veículos VW de forma organizada e intuitiva.

## 📋 Funcionalidades

### 🚗 Informações do Veículo
- **VIN Decodificado**: Fabricante, modelo, ano, planta e número de série
- **Dados Básicos**: Quilometragem, horário onboard, projeto MCD
- **Validação Automática**: Decodificação automática do VIN quando disponível

### ⚙️ Componentes ECU
- **Identificação Completa**: Sistema, software, hardware, número da peça
- **Status Visual**: Indicadores de status (OK, Warning, Error)
- **Seções Organizadas**: Adaptações, coding e subsistemas

### 🔍 Especificações de Coding
- **Bytes Detalhados**: Exibição formatada (ex: `Byte00: 0000 0011 ($03)`)
- **Formato Legível**: Valores binários com espaços e hexadecimal maiúsculo
- **Interface Expansível**: Seções colapsáveis para melhor organização

### 🔧 Adaptações
- **Sessões Agrupadas**: Organizadas por categorias `[VO]_`
- **Valores Detalhados**: Parâmetros `[LO]_` e `[LN]_` com seus valores
- **Navegação Intuitiva**: Estrutura hierárquica expansível

### 🔗 Subsistemas
- **Identificação**: Número do subsistema e designação do sistema
- **Versões**: Software e informações técnicas
- **Organização**: Agrupados por componente principal

## 🚀 Como Usar

### 1. Abrir o Decodificador
```bash
# Clone o repositório
git clone https://github.com/phnahes/vw-odis-backup-viewer.git
cd vw-odis-backup-viewer

# Abra o arquivo no navegador
open odis-decoder.html
```

### 2. Carregar Arquivo
- **Arraste e solte** o arquivo de backup do ODIS na área indicada
- **Ou clique** em "Selecionar Arquivo" para navegar
- **Formatos suportados**: `.html`, `.htm`, `.xml`

### 3. Navegar pelos Dados
- **Expandir seções**: Clique nas setas `▶` para ver detalhes
- **Informações organizadas**: Dados agrupados por componente
- **Interface responsiva**: Funciona em desktop e mobile

## 📁 Estrutura do Projeto

```
vw-odis-backup-viewer/
├── odis-decoder.html          # Interface principal
├── vin-decoder.js            # Decodificador de VIN
├── README.md                 # Este arquivo
└── exemplos/
    ├── *.html               # Arquivos HTML do ODIS
    └── *.xml                # Arquivos XML do ODIS
```

## 🛠️ Tecnologias

- **HTML5**: Interface moderna e responsiva
- **CSS3**: Estilos com variáveis CSS e grid layout
- **JavaScript ES6+**: Parsing de dados e manipulação DOM
- **Regex Avançado**: Extração precisa de dados dos relatórios

## 📊 Formatos Suportados

### Arquivos HTML (ODIS Engineering)
- Relatórios de diagnóstico completos
- Estrutura com `treeView_content`
- Seções de coding, adaptações e identificação

### Arquivos XML (ODIS Protocol)
- Formato estruturado XML
- Elementos `<ecu>`, `<ecu_master>`, `<values>`
- Dados de coding com `bin_value` e `hex_value`

## 🎨 Interface

### Design Moderno
- **Tema claro**: Cores suaves e contrastes adequados
- **Tipografia**: Fontes system e monospace para dados técnicos
- **Ícones**: Emojis para identificação visual rápida

### Responsividade
- **Desktop**: Layout em grid com múltiplas colunas
- **Mobile**: Adaptação automática para telas menores
- **Acessibilidade**: Navegação por teclado e leitores de tela

## 🔧 Desenvolvimento

### Estrutura do Código
```javascript
// Principais funções
extractVehicleInfo()      // Dados básicos do veículo
extractComponents()       // Componentes ECU
extractCodingSpecs()     // Bytes de coding
extractAdaptations()     // Parâmetros de adaptação
extractSubsystems()      // Subsistemas identificados
```

### Padrões de Extração
- **Regex robustos**: Múltiplos padrões para diferentes estruturas
- **Fallback**: Padrões alternativos para maior compatibilidade
- **Validação**: Verificação de dados antes da exibição

## 🤝 Contribuição

1. **Fork** o projeto
2. **Crie** uma branch para sua feature (`git checkout -b feature/nova-funcionalidade`)
3. **Commit** suas mudanças (`git commit -am 'Adicionar nova funcionalidade'`)
4. **Push** para a branch (`git push origin feature/nova-funcionalidade`)
5. **Abra** um Pull Request

## 📝 Changelog

### v1.0.0 (2024-12-19)
- ✅ Implementação inicial do decodificador
- ✅ Suporte para arquivos HTML e XML
- ✅ Decodificação automática de VIN
- ✅ Extração de especificações de coding
- ✅ Interface responsiva e moderna
- ✅ Seções expansíveis para melhor UX

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## ⚠️ Disclaimer

Este projeto é uma ferramenta independente para análise de dados de diagnóstico. Não é afiliado oficialmente à Volkswagen AG ou ao software ODIS Engineering. Use por sua própria conta e risco.

---

**Desenvolvido com ❤️ para a comunidade VW**

🔗 **Links Úteis:**
- [ODIS Engineering](https://www.volkswagen.com)
- [Documentação VW](https://www.volkswagen.com/technical)
- [Issues](https://github.com/phnahes/vw-odis-backup-viewer/issues)
