var drake = dragula([
	document.getElementById('applied'),
	document.getElementById('heardBack'),
  document.getElementById('offer')
])

drake.on('drop', function(el, target, source, sibling) {
  console.log("Started at: " + source.id + " Landed at:" + target.id + " Sibling " + el.previousSibling.id);
});
