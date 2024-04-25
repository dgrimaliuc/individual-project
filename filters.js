// Retrieve selected options from localStorage, or initialize an empty array if not present
let selectedOptions = JSON.parse(localStorage.getItem('selectedOptions')) || [];
// Function to update selected options array and localStorage
function updateSelectedOptions(option, isChecked) {
  if (isChecked) {
    selectedOptions.push(option);
  } else {
    const index = selectedOptions.indexOf(option);
    if (index !== -1) {
      selectedOptions.splice(index, 1);
    }
  }
  // Update localStorage
  localStorage.setItem('selectedOptions', JSON.stringify(selectedOptions));
  console.log(selectedOptions); // You can replace this with your desired action
}

// Function to create filter sections
function createFilterSection(title, options) {
  const section = document.createElement('section');

  section.classList.add('theme-filter__section');

  const header = document.createElement('div');
  header.classList.add('theme-filter__header');

  const name = document.createElement('span');
  name.classList.add('theme-filter__name');
  name.textContent = title;

  const iconWrapper = document.createElement('span');

  iconWrapper.classList.add('theme-filter__icon-wrapper');

  const icon = document.createElement('i');
  icon.classList.add('fa', 'fa-angle-down');

  iconWrapper.appendChild(icon);
  header.appendChild(name);
  header.appendChild(iconWrapper);
  // When header is clicked then rotate icon and toggle section to show or hide options
  header.addEventListener('click', (e) => {
    iconWrapper.classList.toggle('active');
    section.classList.toggle('inactive');
  });
  section.appendChild(header);

  const accordionContent = document.createElement('div');
  accordionContent.classList.add('accordion-content');

  const list = document.createElement('ul');
  list.classList.add('theme-filter__list');

  options.forEach((option) => {
    const listItem = document.createElement('li');
    listItem.classList.add('theme-filter__element');

    const checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    checkbox.setAttribute('section-type', title);
    checkbox.setAttribute('value', option);
    checkbox.classList.add('marketing-checkbox');
    checkbox.checked = selectedOptions.includes(`${title}:${option}`);

    checkbox.addEventListener('change', () => {
      updateSelectedOptions(`${title}:${option}`, checkbox.checked);
    });

    const label = document.createElement('label');
    label.classList.add('marketing-checkbox-label');
    label.textContent = option;

    listItem.appendChild(checkbox);
    listItem.appendChild(label);
    list.appendChild(listItem);
  });

  accordionContent.appendChild(list);
  section.appendChild(accordionContent);

  return section;
}

// Function to render whole filter section
function renderFilterSections(filterOptions) {
  const aside = document.createElement('aside');
  filterOptions.forEach((option) => {
    const section = createFilterSection(option.title, option.options);
    aside.appendChild(section);
  });
  const filterSection = document.getElementById('filter_section');
  filterSection.appendChild(aside);
}

const filterOptions = [
  {
    title: 'Price',
    options: ['Free', 'Paid'],
  },
  {
    title: 'Industry',
    options: [
      'Baby and kids',
      'Food and drink',
      'Home and decor',
      'Toys and games',
    ],
  },
  {
    title: 'Catalog Size',
    options: ['1-9 Products', '10-199 Products', '200+ Products'],
  },
  {
    title: 'Features',
    options: [
      'Age verifier',
      'Event calendar',
      'Infinite scroll',
      'Mega menu',
      'Store locator',
    ],
  },
];

// Render the filter sections
renderFilterSections(filterOptions);
