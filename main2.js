var oTurn = $('#flipbook').turn({
    autoCenter: false,
    width: 400,
    height: 400,
    page:3,
 });
$('.zoom-view').on('click', function () {
  zoom.to({
    element: document.getElementById('flipbook'),
  });
});