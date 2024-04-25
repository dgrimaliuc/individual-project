const allCardsKey = 'shop-items';
const filteredCardsKey = 'filtered-items';
const filtersKey = 'selected-filters';
let selectedOptions = JSON.parse(localStorage.getItem(filtersKey)) || {
  Price: [],
  Gender: [],
  Color: [],
  Size: [],
};

function applyFilter(item, filter) {
  console.log(filter);
  if (filter[1].length === 0) {
    return true;
  }
  switch (filter[0]) {
    // Filter price based on the selected price range
    case 'Price':
      return filter[1].some((price) => {
        switch (price) {
          case 'Under $25':
            return item.price < 25;
          case '$25 to $50':
            return item.price >= 25 && item.price < 50;
          case '$50 to $100':
            return item.price >= 50 && item.price < 100;
          case 'Over $100':
            return item.price >= 100;
          default:
            return false;
        }
      });
    case 'Color':
      return filter[1].some((color) => color.toLowerCase() === item.color);
    case 'Size':
      return filter[1].includes(item.size);
    case 'Gender':
      return filter[1].some((gender) => gender.toLowerCase() === item.gender);
    default:
      return false;
  }
}

function filterItems(options) {
  const allItems = JSON.parse(localStorage.getItem(allCardsKey)) ?? [];
  console.log('options', options);

  const filteredItems = allItems.filter((item) => {
    return Object.entries(options).every((option) => applyFilter(item, option));
  });

  localStorage.setItem(filteredCardsKey, JSON.stringify(filteredItems));
}

// Update selectedOptions with selected filter
function updateSelectedOptions(option, isChecked) {
  const pair = option.split(':');
  const key = pair[0];
  const value = pair[1];

  if (isChecked) {
    selectedOptions[key].push(value);
  } else {
    const index = selectedOptions[key].indexOf(value);
    if (index !== -1) {
      selectedOptions[key].splice(index, 1);
    }
  }
  // Update localStorage
  localStorage.setItem(filtersKey, JSON.stringify(selectedOptions));
  filterItems(selectedOptions);
  // Reload page to apply filters
  location.reload();
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
    checkbox.checked = selectedOptions[title].includes(option);

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
    options: ['Under $25', '$25 to $50', '$50 to $100', 'Over $100'],
  },
  {
    title: 'Color',
    options: ['Black', 'White', 'Red', 'Yellow'],
  },
  {
    title: 'Size',
    options: ['M', 'L', 'XL'],
  },
  {
    title: 'Gender',
    options: ['Male', 'Female'],
  },
];

// Render the filter sections
renderFilterSections(filterOptions);
