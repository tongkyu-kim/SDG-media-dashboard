# Data Sources

This directory contains the data sources required for the SDG Media Dashboard analysis.

## Directory Structure

### `/oda/` - Official Development Assistance Data
Contains Korean ODA project data with SDG classifications and funding information.

**Required file**: `oda_korea_dataset.csv`

**Format**:
```csv
project_number,year,month,date,project_title,recipient_name,usd_commitment,sdg_focus,donor_name
KOR-000001,2013,01,2013-01-15,"Healthcare Infrastructure Cambodia",Cambodia,2500000,3,"Republic of Korea"
```

**Column Descriptions**:
- `project_number`: Unique identifier for each project
- `year`: Project year (YYYY)
- `month`: Project month (MM)
- `date`: Full project date (YYYY-MM-DD)
- `project_title`: Descriptive title of the project
- `recipient_name`: Country or region receiving the aid
- `usd_commitment`: Funding amount in USD
- `sdg_focus`: Primary SDG number (1-17)
- `donor_name`: Donor country/organization

### `/raw/` - Raw Media Data
Contains original news and media coverage data before processing.

**Required file**: `2012.xlsx`

**Format**: Excel spreadsheet with the following columns:
- `date`: Article publication date (YYYY-MM-DD)
- `title`: Article headline
- `category`: News category (Health, Economics, Environment, etc.)
- `keywords`: Comma-separated keywords
- `sdg_focus`: Related SDG number (1-17)
- `sentiment`: Article sentiment (positive, neutral, negative)
- `impact_score`: Impact intensity score (1-6)
- `coverage_type`: Coverage level (major, moderate, minor)

### `/processed/` - Processed Data
Contains cleaned and processed versions of the raw data for analysis.

## Data Requirements

### Minimum Data Requirements
- **Time Coverage**: At least 24 months of continuous data
- **SDG Coverage**: Data should cover all 17 SDGs
- **Geographic Coverage**: Multiple recipient countries
- **Temporal Resolution**: Monthly granularity preferred

### Data Quality Guidelines
1. **Completeness**: Minimize missing values
2. **Consistency**: Use standardized country names and SDG classifications
3. **Accuracy**: Verify funding amounts and dates
4. **Timeliness**: Regular updates to maintain relevance

## Sample Data

If you don't have your own data, the dashboard will generate sample data automatically when you click "Load Local Data Files". This sample data demonstrates the expected structure and relationships.

## Data Sources and Attribution

### ODA Data Sources
- Korean International Cooperation Agency (KOICA)
- OECD Development Assistance Committee (DAC)
- Ministry of Foreign Affairs of Korea

### Media Data Sources
- Korean news agencies and newspapers
- Online media platforms
- Press release databases

## Privacy and Security

- All data processing occurs locally in the browser
- No data is transmitted to external servers
- Ensure compliance with data protection regulations
- Consider anonymizing sensitive information

## Updating Data

1. Place new data files in the appropriate directories
2. Ensure file names match the expected format
3. Verify data structure matches the requirements
4. Test the dashboard with new data before deployment

## Troubleshooting

### Common Issues
- **File not found**: Check file names and locations
- **Parse errors**: Verify CSV/Excel format compliance
- **Missing correlations**: Ensure SDG classifications are consistent
- **Date formatting**: Use YYYY-MM-DD format consistently

### Data Validation
The dashboard includes built-in validation that will report:
- Missing required columns
- Invalid date formats
- Out-of-range SDG numbers
- Suspicious funding amounts

For additional support, please refer to the main README or open an issue on GitHub.
