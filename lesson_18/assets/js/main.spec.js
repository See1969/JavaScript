describe('Тестування функції ageClassification()', function () {

  const ageClassificationTest = ageClassification;

  it('Перевіряємо вік меньше нуля - очікуємо "null" ', function () {
    expect(ageClassificationTest(-1)).toBeNull();
  });
  it('Перевіряємо вік більше 122 - очікуємо "null" ', function () {
    expect(ageClassificationTest(122.01)).toBeNull();
    expect(ageClassificationTest(150)).toBeNull();
  });
  it('Перевіряємо вік від 0 - 24, очікуємо "детский возраст" ', function () {
    const result = 'детский возраст';

    expect(ageClassificationTest(1)).toBe(result);
    expect(ageClassificationTest(24)).toBe(result);
  });
  it('Перевіряємо вік від (24+) - 44, очікуємо "молодой возраст" ', function () {
    const result = 'молодой возраст';

    expect(ageClassificationTest(24.01)).toBe(result);
    expect(ageClassificationTest(44)).toBe(result);
  });
  it('Перевіряємо вік від (44+) - 65, очікуємо "средний возраст" ', function () {
    const result = 'средний возраст';

    expect(ageClassificationTest(44.01)).toBe(result);
    expect(ageClassificationTest(65)).toBe(result);
  });
  it('Перевіряємо вік від (65+) - 75, очікуємо "пожилой возраст" ', function () {
    const result = 'пожилой возраст';

    expect(ageClassificationTest(65.01)).toBe(result);
    expect(ageClassificationTest(75)).toBe(result);
  });
  it('Перевіряємо вік від (75+) - 90, очікуємо "старческий возраст" ', function () {
    const result = 'старческий возраст';

    expect(ageClassificationTest(75.01)).toBe(result);
    expect(ageClassificationTest(90)).toBe(result);
  });
  it('Перевіряємо вік від (90+) - 122, очікуємо "долгожители" ', function () {
    const result = 'долгожители';

    expect(ageClassificationTest(90.01)).toBe(result);
    expect(ageClassificationTest(122)).toBe(result);
  });
});


describe('Тестування функції weekFn()', function () {

  const weekFnTest = weekFn;

  it('Перевіряємо дні тижня, очікуємо назви днів(1 - "Понедельник" ... 7 - "Воскресенье")', function () {
    expect(weekFnTest(1)).toBe('Понедельник');
    expect(weekFnTest(3)).toBe('Среда');
    expect(weekFnTest(7)).toBe('Воскресенье');
  });
  it('Перевіряємо дні тижня, при некоректному записі очікуємо "null" ', function () {
    expect(weekFnTest(9)).toBeNull();
    expect(weekFnTest(1.2)).toBeNull();
    expect(weekFnTest('2')).toBeNull();
  });
});