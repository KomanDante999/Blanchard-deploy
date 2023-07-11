(() => {
  const galleryChoicesSelect = document.querySelector('.js-choices-gallery');
  const galleryChoices = new Choices(galleryChoicesSelect, {
    shouldSort: false,
    searchEnabled: false,
    itemSelectText: '',
    position: 'bottom',
    classNames: {
      containerOuter: 'choices-gallery gallery__select',
      containerInner: 'choices-gallery__inner',
      input: 'choices-gallery__input',
      inputCloned: 'choices-gallery__input--cloned',
      list: 'choices-gallery__list',
      listItems: 'choices-gallery__list--multiple',
      listSingle: 'choices-gallery__list--single',
      listDropdown: 'choices-gallery__list--dropdown',
      item: 'choices-gallery__item',
      itemSelectable: 'choices-gallery__item--selectable',
      itemDisabled: 'choices-gallery__item--disabled',
      itemChoice: 'choices-gallery__item--choice',
      placeholder: 'choices-gallery__placeholder',
      group: 'choices-gallery__group',
      groupHeading: 'choices-gallery__heading',
      button: 'choices-gallery__button',
      activeState: 'is-active',
      focusState: 'is-focused',
      openState: 'is-open',
      disabledState: 'is-disabled',
      highlightedState: 'is-highlighted',
      selectedState: 'is-selected',
      flippedState: 'is-flipped',
      loadingState: 'is-loading',
      noResults: 'has-no-results',
      noChoices: 'has-no-choices'
    },
  });
  
})();