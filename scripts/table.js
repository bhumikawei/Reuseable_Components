

var tableData = [
    {name: 'Alex John', position: 'Software Engineer', location: 'New York', age: 29, startDate: '2022/01/15', salary: '$150,000'},
    {name: 'Maria Smith', position: 'Data Scientist', location: 'San Francisco', age: 34, startDate: '2020/08/21', salary: '$180,000'},
    {name: 'John Doe', position: 'Product Manager', location: 'Los Angeles', age: 40, startDate: '2019/05/30', salary: '$200,000'},
    {name: 'Jane Doe', position: 'UX Designer', location: 'Chicago', age: 28, startDate: '2021/11/15', salary: '$140,000'},
    {name: 'Alex John', position: 'Software Engineer', location: 'New York', age: 29, startDate: '2022/01/15', salary: '$150,000'},
    {name: 'Maria Smith', position: 'Data Scientist', location: 'San Francisco', age: 34, startDate: '2020/08/21', salary: '$180,000'},
    {name: 'John Doe', position: 'Product Manager', location: 'Los Angeles', age: 40, startDate: '2019/05/30', salary: '$200,000'},
    {name: 'Jane Doe', position: 'UX Designer', location: 'Chicago', age: 28, startDate: '2021/11/15', salary: '$140,000'},
    {name: 'Alex John', position: 'Software Engineer', location: 'New York', age: 29, startDate: '2022/01/15', salary: '$150,000'},
    {name: 'Maria Smith', position: 'Data Scientist', location: 'San Francisco', age: 34, startDate: '2020/08/21', salary: '$180,000'},
    {name: 'John Doe', position: 'Product Manager', location: 'Los Angeles', age: 40, startDate: '2019/05/30', salary: '$200,000'},
    {name: 'Jane Doe', position: 'UX Designer', location: 'Chicago', age: 28, startDate: '2021/11/15', salary: '$140,000'},
    {name: 'Alex John', position: 'Software Engineer', location: 'New York', age: 29, startDate: '2022/01/15', salary: '$150,000'},
    {name: 'Maria Smith', position: 'Data Scientist', location: 'San Francisco', age: 34, startDate: '2020/08/21', salary: '$180,000'},
    {name: 'John Doe', position: 'Product Manager', location: 'Los Angeles', age: 40, startDate: '2019/05/30', salary: '$200,000'},
    {name: 'Jane Doe', position: 'UX Designer', location: 'Chicago', age: 28, startDate: '2021/11/15', salary: '$140,000'},
    {name: 'Alex John', position: 'Software Engineer', location: 'New York', age: 29, startDate: '2022/01/15', salary: '$150,000'},
    {name: 'Maria Smith', position: 'Data Scientist', location: 'San Francisco', age: 34, startDate: '2020/08/21', salary: '$180,000'},
    {name: 'John Doe', position: 'Product Manager', location: 'Los Angeles', age: 40, startDate: '2019/05/30', salary: '$200,000'},
    {name: 'Jane Doe', position: 'UX Designer', location: 'Chicago', age: 28, startDate: '2021/11/15', salary: '$140,000'},
    // Add more JSON objects similar to the ones above for each person
];

$(document).ready(function() {
    var currentPage = 1;
    var rowsPerPage = 5;

    $("#searchInput").on('keyup', function() {
        currentPage = 1;
        renderTableData();
    })

    $("#rowsPerPage").on('change', function() {
        rowsPerPage = $(this).val();
        currentPage = 1;
        renderTableData();
    })

    $("table th").on('click', function() {
        var columnName = $(this).attr('data-name');
        var sortDirection = $(this).attr('data-sort');


        sortTable(columnName, sortDirection);
        if(sortDirection == 'asc'){
            $(this).attr('data-sort', 'desc');
        } else {
            $(this).attr('data-sort', 'asc');
        }
    })

    function renderTableData() {
        var searchVal = $("#searchInput").val().toLowerCase();
        var filteredData = tableData.filter(function(item) {
            return Object.values(item).join(' ').toLowerCase().includes(searchVal);
        })

        var startIndex = (currentPage - 1) * rowsPerPage;
        var endIndex = startIndex + rowsPerPage;

        var paginatedItems = filteredData.slice(startIndex, endIndex);

        $("#tableBody").empty();


        $.each(paginatedItems, function(index, item) {
            var rowHtml = '<tr>' + 
            '<td>' + item.name + '</td>' + 
            '<td>' + item.position + '</td>' + 
            '<td>' + item.location + '</td>' + 
            '<td>' + item.age + '</td>' + 
            '<td>' + item.startDate + '</td>' + 
            '<td>' + item.salary + '</td>' + 
            '</tr>';


            $("#tableBody").append(rowHtml);
        })

        renderPagination(filteredData.length);
    }

        //Re Render Pagination
        function renderPagination(totalItems) {
            var pageCount = Math.ceil(totalItems / rowsPerPage);
            $("#pagination").empty();
            for(let i = 1; i <= pageCount; i++){
                var btn = $('<button class="pagination-btn">'+ i +'</button>').click(function(){
                    currentPage = i;
                    renderTableData();
                })
                $("#pagination").append(btn);
            }
        }

        function sortTable(columnName, sortDirection) {
            tableData.sort(function(a, b) {
                if(a[columnName] === b[columnName]){
                    return 0;
                }

                var result = (a[columnName] < b[columnName]) ? -1 : 1;
                return sortDirection === 'asc' ? result : result * -1;
            })
            renderTableData();
        }
        renderTableData();
})