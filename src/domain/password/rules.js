const RULE = {
  OneLetter: "OneLetter",
  UpperAndLower: "UpperAndLower",
  OneNumber: "OneNumber",
  SpecialSymbol: "SpecialSymbol",
  LongerThan4: "LongerThan4",
  LongerThan8: "LongerThan8",
  LongerThan12: "LongerThan12",
};

const REGEX_RULE = {
  OneLetter: "^.*[a-zA-Z].*$",
  UpperAndLower: "^(?=.*[a-z])(?=.*[A-Z]).*$",
  OneNumber: "^.*\\d.*$",
  SpecialSymbol:
    "^.*[\\s\\!\\@\\#\\$\\%\\^\\&\\*\\(\\)_\\+\\-\\=\\[\\]\\{\\}\\|\\;\\'\\:\"\\,\\.\\/\\<\\>\\?\\~\\`].*$",
  LongerThan4: ".{5,}",
  LongerThan8: ".{9,}",
  LongerThan12: ".{13,}",
};

export { RULE, REGEX_RULE };
