/* Javascript for UploaderDownloaderXBlock. */
function UploaderDownloaderXBlock(runtime, element) {

    var fileNameExt = '';
    var extension = '';

    $(document).ready(function() {
        $('#uploads').DataTable({
            "lengthChange": false
        });
    });

    $(".file_download").click(function(e) {
        e.preventDefault();
        var download_file_url = runtime.handlerUrl(element, 'download_file');
        $.ajax({
            url: download_file_url,
            type: "POST",
            data: JSON.stringify({
                file_id: this.id,
            }),
            success: function (data) {
                window.location.href = data;
            },
            error: function (error) {
                console.log("Error : ");
                console.log(error);
            }
        });

    });
}
