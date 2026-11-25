// Traveller demographics, copied from the WordPress chart script (post 90).
// They cover 25 of the 26 participants (all except Bella, who joined in Report 4).
// They agree with Report 4: 44% aged 20–24 (11 of 25), roughly two in three female (17 of 25).
// Replace with the validated 26-person figures when Bethany supplies them.
export interface Chart { title: string; rows: { label: string; value: number }[] }

export const DEMOGRAPHICS_COUNT = 25;

export const DEMOGRAPHICS: Chart[] = [
  { title: 'Country of origin', rows: [
    { label: 'Germany', value: 5 }, { label: 'UK', value: 5 }, { label: 'Spain', value: 3 },
    { label: 'Poland', value: 2 }, { label: 'Hungary/Israel', value: 1 }, { label: 'Italy', value: 1 },
    { label: 'Luxembourg', value: 1 }, { label: 'Sweden', value: 1 }, { label: 'USA', value: 1 },
    { label: 'Canada', value: 1 }, { label: 'Venezuela', value: 1 }, { label: 'Switzerland', value: 1 },
    { label: 'New Zealand', value: 1 }, { label: 'Ireland', value: 1 },
  ] },
  { title: 'Sex', rows: [{ label: 'Female', value: 17 }, { label: 'Male', value: 8 }] },
  { title: 'Age', rows: [
    { label: '20-24', value: 11 }, { label: '25-29', value: 5 }, { label: '30-34', value: 4 },
    { label: '35-39', value: 2 }, { label: '40-44', value: 3 },
  ] },
];

for (const c of DEMOGRAPHICS) {
  const total = c.rows.reduce((n, r) => n + r.value, 0);
  if (total !== DEMOGRAPHICS_COUNT) throw new Error(`Demographics "${c.title}" adds up to ${total}, not ${DEMOGRAPHICS_COUNT}`);
}
