$(function () {
  $.extend( $.fn.dataTableExt.oSort, {
    "date-vn-pre": function ( a ) {
        var ukDatea = a.split('-');
        return (ukDatea[2] + ukDatea[1] + ukDatea[0]) * 1;
    },

    "date-vn-asc": function ( a, b ) {
        return ((a < b) ? -1 : ((a > b) ? 1 : 0));
    },

    "date-vn-desc": function ( a, b ) {
        return ((a < b) ? 1 : ((a > b) ? -1 : 0));
    }
  });
  $('.example2').DataTable({
    "paging": true,
    "lengthChange": false,
    "searching": false,
    "ordering": true,
    "info": true,
    "autoWidth": false
  });
  $('.coupon-use-list').DataTable({
    "paging": true,
    "lengthChange": false,
    "searching": false,
    "ordering": true,
    "info": true,
    "autoWidth": false,
    "aoColumns": [
            null,
            { "sType": "date-vn" },
            null,
            null,
            null
        ]
  });
  $('.coupon-list').DataTable({
    "paging": true,
    "lengthChange": false,
    "searching": false,
    "ordering": true,
    "info": true,
    "autoWidth": false,
    "aoColumns": [
            null,
            { "sType": "date-vn" },
            { "sType": "date-vn" },
            null,
            null,
        ]
  });
  $('input[type="datetime"]').datepicker({
    dateFormat: 'dd-mm-yy'
  });
});
