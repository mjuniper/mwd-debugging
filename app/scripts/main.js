$(() => {
  const API = 'https://opendata.arcgis.com/api/v2';
  let page = 0;
  let size = 10;

  nextPage();

  function nextPage() {
    page += 1;
    fetch().then(handleResponse);
  }

  function fetch() {
    const url = `${API}/datasets?page[number]=${page}&page[size]=${size}`;
    return $.getJSON(url)
      .then(resp => {
        return resp.data;
      });
  }

  function handleResponse(data) {
    const target = $('table tbody').empty();
    const elAry = [];
    let newEl;
    for (let d of data) {
      newEl = $(`<tr><td>${d.attributes.name}</td><td>${d.attributes.itemType}</td><td>${d.quality}</td><td>${d.attributes.recordCount}</td></tr>`);
      elAry.push(newEl);
      target.append(elAry);
    }
  }

  $('#more').on('click', nextPage);
});
