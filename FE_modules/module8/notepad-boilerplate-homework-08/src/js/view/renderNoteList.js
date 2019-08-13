function renderNoteList(ref, arr) {
    const newArr = arr.map(el => ref.append(createListItem(el)));
    return newArr;
    // const newArr = ref.cloneNode(false);
    // newArr.append(...arr.map(el => createListItem(el)));
    // return ref.replaceWith(newArr);
}