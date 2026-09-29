export function calcAverage(grades) {
  const sum = grades.reduce((total, grade) => total + grade, 0);
  return sum / grades.length;
}