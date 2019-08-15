function renderNoteList(ref, arr) {
    // const newArr = arr.map(el => createListItem(el));
    // ref.innerHTML = '';
    // ref.append(...newArr);

    // ref.innerHTML = '';
    // ref.append(...arr.map(el => createListItem(el)));

    ref.innerHTML = '';
    const newArr = arr.map(el => ref.append(createListItem(el)));
    return newArr;
}