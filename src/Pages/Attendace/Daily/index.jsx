import React from 'react'

const Daily = () => {
    return (
        <div id="page-content-wrapper">

            <div class="container-fluid py-2">
                <div class="row">
                    <div class="col-6 my-auto">
                        <h4 class="py-2 mb-0 font-weight-bold">Daily Attendance</h4>
                    </div>
                </div>
            </div>

            <div class="container container-wrapper mb-4">


                <div class="card mb-4">
                    <div class="card-body font-weight-bold pb-0">
                        Submit Attendance
                    </div>
                    <div class="card-body">
                        <div class="row">
                            <div class="col-md-6 offset-md-3">
                                <form method="post">

                                    <div class="form-group">
                                        <label>Card ID</label>
                                        {/* <input type="text" name="rfid_cardid" class="form-control" placeholder="Scan the ID Card" required="" autofocus=""> */}
                                    </div>

                                    <div class="form-group">
                                        <label>Temperature</label>
                                        {/* <input type="text" name="temperature" class="form-control"> */}
                                    </div>

                                    <div class="form-group text-right">
                                        <button type="submit" name="save" class="btn btn-primary">Submit</button>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="DataTables_Table_0_wrapper" class="dataTables_wrapper dt-bootstrap4 no-footer"><div class="row"><div class="col-sm-12 col-md-6"><div class="dataTables_length" id="DataTables_Table_0_length"><label>Show <select name="DataTables_Table_0_length" aria-controls="DataTables_Table_0" class="custom-select custom-select-sm form-control form-control-sm"><option value="10">10</option><option value="25">25</option><option value="50">50</option><option value="100">100</option></select> entries</label></div></div><div class="col-sm-12 col-md-6"><div id="DataTables_Table_0_filter" class="dataTables_filter">
                    <label>Search:
                        {/* <input type="search" class="form-control form-control-sm" placeholder="" aria-controls="DataTables_Table_0"> */}
                    </label></div></div></div><div class="row"><div class="col-sm-12"><table class="DTable table dataTable no-footer" id="DataTables_Table_0" role="grid" aria-describedby="DataTables_Table_0_info">
                        <thead>
                            <tr role="row"><th class="sorting_asc" tabindex="0" aria-controls="DataTables_Table_0" rowspan="1" colspan="1" aria-sort="ascending" aria-label="Date / Time: activate to sort column descending">Date / Time</th><th class="sorting" tabindex="0" aria-controls="DataTables_Table_0" rowspan="1" colspan="1" aria-label="User: activate to sort column ascending">User</th><th class="sorting" tabindex="0" aria-controls="DataTables_Table_0" rowspan="1" colspan="1" aria-label="Type: activate to sort column ascending">Type</th><th class="sorting" tabindex="0" aria-controls="DataTables_Table_0" rowspan="1" colspan="1" aria-label="Temp: activate to sort column ascending">Temp</th><th class="sorting" tabindex="0" aria-controls="DataTables_Table_0" rowspan="1" colspan="1" aria-label="Action: activate to sort column ascending">Action</th></tr></thead>
                        <tbody>

                            <tr class="odd"><td valign="top" colspan="5" class="dataTables_empty">No data available in table</td></tr></tbody>
                    </table></div></div><div class="row"><div class="col-sm-12 col-md-5"><div class="dataTables_info" id="DataTables_Table_0_info" role="status" aria-live="polite">Showing 0 to 0 of 0 entries</div></div><div class="col-sm-12 col-md-7"><div class="dataTables_paginate paging_simple_numbers" id="DataTables_Table_0_paginate"><ul class="pagination"><li class="paginate_button page-item previous disabled" id="DataTables_Table_0_previous"><a href="#" aria-controls="DataTables_Table_0" data-dt-idx="0" tabindex="0" class="page-link">Previous</a></li><li class="paginate_button page-item next disabled" id="DataTables_Table_0_next"><a href="#" aria-controls="DataTables_Table_0" data-dt-idx="1" tabindex="0" class="page-link">Next</a></li></ul></div></div></div></div>

            </div>


            <div class="container-fluid pt-3 border-top" id="copyright">
                2023 © Robocube Tuition. All right reserved. Powered by <a href="https://synorexcloud.com/" target="_blank">Synorex</a>
            </div>
        </div>
    )
}

export default Daily
