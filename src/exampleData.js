// Default data to use when localStorage unavailable / contains no app data
const exampleData = (() => {
  let todos = [
    { title: 'do laundry', description: 'remember jeans',
      priority: 'high', project: 'regular stuff' },
    { title: 'buy coffee', description: 'whole beans',
      priority: 'medium', project: 'regular stuff' },
    { title: 'research arrow functions',
      description: 'make notes and save links',
      priority: 'high', project: 'write article' },
    { title: 'write body of article', description: 'actually write the thing',
      priority: 'medium', project: 'write article' },
    { title: 'proofread article',
      description: 'check for errors and bad grammar',
      priority: 'low', project: 'write article' },
    { title: 'research IIFEs',
      description: 'what are they, and when are they used?',
      priority: 'medium', project: 'write article' },
    { title: 'investigate engine idle issue',
      description: 'engine idles unevenly and stalls when cold',
      priority: 'medium', project: 'car' },
    { title: 'buy new tyres',
      description: 'front tyres have low tread on outside edges',
      priority: 'medium', project: 'car' },
    { title: 'wash car', description: '', priority: 'low', project: 'car' }
  ];

  let projects = [
    'regular stuff',
    'write article',
    'car'
  ];

  return {todos, projects}
})();

export { exampleData }
