const books: Record<string, Record<string, string | string[]>> = {
  "1": {
    nepali: "https://moecdc.gov.np/storage/gallery/1704094300.pdf",
    english: "https://moecdc.gov.np/storage/gallery/1672307877.pdf",
    math_nepali: "https://moecdc.gov.np/storage/gallery/1672308310.pdf",
    math_english: "https://moecdc.gov.np/storage/gallery/1708925298.pdf",
    serofero: "https://moecdc.gov.np/storage/gallery/1672308652.pdf"
  },
  "2": {
    nepali: "https://moecdc.gov.np/storage/gallery/1672633608.pdf",
    english: "https://moecdc.gov.np/storage/gallery/1672556083.pdf",
    math_nepali: "https://moecdc.gov.np/storage/gallery/1672567946.pdf",
    math_english: "https://moecdc.gov.np/storage/gallery/1708852295.pdf",
    serofero: "https://moecdc.gov.np/storage/gallery/1682058190.pdf"
  },
  "3": {
    nepali: "https://moecdc.gov.np/storage/gallery/1672633680.pdf",
    english: "https://moecdc.gov.np/storage/gallery/1672633746.pdf",
    math_nepali: "https://moecdc.gov.np/storage/gallery/1672633791.pdf",
    math_english: "https://moecdc.gov.np/storage/gallery/1708924606.pdf",
    serofero: "https://moecdc.gov.np/storage/gallery/1672633882.pdf"
  },
  "4": {
    nepali: "https://moecdc.gov.np/storage/gallery/1681727544.pdf",
    english: "https://moecdc.gov.np/storage/gallery/1681728172.pdf",
    math_nepali: "https://moecdc.gov.np/storage/gallery/1681727585.pdf",
    math_english: "https://moecdc.gov.np/storage/gallery/1708926663.pdf",
    social: "https://moecdc.gov.np/storage/gallery/1681727636.pdf",
    science_nepali: "https://moecdc.gov.np/storage/gallery/1681728702.pdf",
    science_english: "https://moecdc.gov.np/storage/gallery/1704704471.pdf",
    health_nepali: "https://moecdc.gov.np/storage/gallery/1681792950.pdf",
    health_english: "https://moecdc.gov.np/storage/gallery/1704704216.pdf"
  },
  "5": {
    nepali: "https://moecdc.gov.np/storage/gallery/1681211870.pdf",
    english: "https://moecdc.gov.np/storage/gallery/1681367111.pdf",
    math_nepali: "https://moecdc.gov.np/storage/gallery/1681211690.pdf",
    math_english: "https://moecdc.gov.np/storage/gallery/1709109482.pdf",
    science_nepali: "https://moecdc.gov.np/storage/gallery/1681212072.pdf",
    science_english: "https://moecdc.gov.np/storage/gallery/1709112362.pdf",
    social: "https://moecdc.gov.np/storage/gallery/1681212176.pdf",
    health_nepali: "https://moecdc.gov.np/storage/gallery/1682061955.pdf"
  },
  "6": {
    nepali: "https://moecdc.gov.np/storage/gallery/1672799748.pdf",
    english: "https://moecdc.gov.np/storage/gallery/1672799804.pdf",
    math_nepali: "https://moecdc.gov.np/storage/gallery/1672799879.pdf",
    math_english: "https://moecdc.gov.np/storage/gallery/1708925838.pdf",
    science_nepali: "https://moecdc.gov.np/storage/gallery/1672799965.pdf",
    science_english: "https://moecdc.gov.np/storage/gallery/1709542968.pdf",
    social: "https://moecdc.gov.np/storage/gallery/1672800056.pdf",
    health_physical_nepali: "https://moecdc.gov.np/storage/gallery/1710760807.pdf",
    health_physical_english: "https://moecdc.gov.np/storage/gallery/1709191880.pdf"
  },
  "7": {
    nepali: "https://moecdc.gov.np/storage/gallery/1672800491.pdf",
    english: "https://moecdc.gov.np/storage/gallery/1672800534.pdf",
    math_nepali: "https://moecdc.gov.np/storage/gallery/1672800575.pdf",
    math_english: "https://moecdc.gov.np/storage/gallery/1709112299.pdf",
    science_nepali: "https://moecdc.gov.np/storage/gallery/1674294172.pdf",
    science_english: "https://moecdc.gov.np/storage/gallery/1709186060.pdf",
    social: "https://moecdc.gov.np/storage/gallery/1672800794.pdf",
    health_physical_nepali: "https://moecdc.gov.np/storage/gallery/1672800992.pdf",
    health_physical_english: "https://moecdc.gov.np/storage/gallery/1708934002.pdf"
  },
  "8": {
    nepali: "https://moecdc.gov.np/storage/gallery/1682234494.pdf",
    english: "https://moecdc.gov.np/storage/gallery/1689238602.pdf",
    math_nepali: "https://moecdc.gov.np/storage/gallery/1684297112.pdf",
    math_english: "https://moecdc.gov.np/storage/gallery/1692693895.pdf",
    science_nepali: [
      "https://moecdc.gov.np/storage/gallery/1684481476.pdf",
      "https://moecdc.gov.np/storage/gallery/1684483448.pdf"
    ],
    science_english: "https://moecdc.gov.np/storage/gallery/1687157819.pdf",
    social: "https://moecdc.gov.np/storage/gallery/1682060895.pdf",
    health_physical_nepali: "https://moecdc.gov.np/storage/gallery/1708859361.pdf",
    health_physical_english: "https://moecdc.gov.np/storage/gallery/1687151177.pdf"
  },
  "9": {
    nepali: "https://moecdc.gov.np/storage/gallery/1672903464.pdf",
    english: "https://moecdc.gov.np/storage/gallery/1688289325.pdf",
    math_nepali: "https://moecdc.gov.np/storage/gallery/1672910414.pdf",
    math_english: "https://moecdc.gov.np/storage/gallery/1708861009.pdf",
    science_nepali: "https://moecdc.gov.np/storage/gallery/1672910467.pdf",
    science_english: "https://moecdc.gov.np/storage/gallery/1709189449.pdf",
    social: "https://moecdc.gov.np/storage/gallery/1672910576.pdf"
  },
  "10": {
    nepali: "https://moecdc.gov.np/storage/gallery/1681370216.pdf",
    english: "https://moecdc.gov.np/storage/gallery/1681716079.pdf",
    math_nepali: "https://moecdc.gov.np/storage/gallery/1681715186.pdf",
    math_english: "https://moecdc.gov.np/storage/gallery/1687066510.pdf",
    science_nepali: [
      "https://moecdc.gov.np/storage/gallery/1682668847.pdf",
      "https://moecdc.gov.np/storage/gallery/1682668904.pdf"
    ],
    science_english: [
      "https://moecdc.gov.np/storage/gallery/1692097269.pdf",
      "https://moecdc.gov.np/storage/gallery/1687942336.pdf",
      "https://moecdc.gov.np/storage/gallery/1688286170.pdf"
    ],
    social: "https://moecdc.gov.np/storage/gallery/1710845068.pdf"
  }
};

export default books;
