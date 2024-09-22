export const MOCK_SEXPRESSION_DATA = `
    (label all ())
  
    (label prof-manual (has self.profession1 manual))
    (label prof-bile_limecky (all (except self.profession1 manual) (except self.profession3 jiny)))
    (label prof-it (has self.profession1 it))
    (label prof-fin_bank (has self.profession1 finance bank))
    (label prof-sale (has self.profession1 sale))
  
    (label sex-muzi (has self.sex man))
    (label sex-zeny (has self.sex woman))
  
    (label age-age_18_29 (lt self.age 30))
    (label age-age_30_44 (all (gt self.age 29) (lt self.age 45)))
    (label age-age_45_plus (gt self.age 44))
  
    (label vzd-bez_maturity (has self.vzd basic vyuceni))
    (label vzd-maturita (has self.vzd maturita))
    (label vzd-vs (has self.vzd university))
  `;