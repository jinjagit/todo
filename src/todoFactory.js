const todoFactory = (id, title, description, priority, category) => {

  const output = () => console.log(`id: ${id}, title: ${title}, desc: ${description}, priority: ${priority}, category: ${category}`);

  const setTitle = newTitle => title = newTitle;
  const setDescription = newDescription => description = newDescription;
  const setPriority = newPriority => priority = newPriority;
  const setCategory = newCategory => category = newCategory;

  return {
    id, title, description, priority, category,
    setTitle, setDescription, setPriority, setCategory, output };
};

export { todoFactory }
