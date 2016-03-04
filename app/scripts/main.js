$(() => {
  // TODO: bust it by using http
  $.getJSON('https://opendata.arcgis.com/api/v2/datasets')
    .then(resp => {
      const target = $('table tbody');
      let newEl;
      let elAry = [];
      for (let d of resp.data) {
        // TODO: also bust it by misaligning the attributes
        newEl = $(`<tr><td>${d.attributes.name}</td><td>${d.attributes.itemType}</td><td>${d.attributes.quality}</td><td>${d.attributes.recordCount}</td></tr>`);
        // TODO: also bust it by omitting one of these lines
        elAry.push(newEl);
        target.append(elAry);
      }
    });
});
