
export function loadDonations(params,callback) { _api("/getDonations", params, callback)}
export function loadRegister(params,callback) { _api("/getRegister", params, callback)}

function _api(url, params,callback)
{
    // console.log("get encounterlist");

    $.ajax({
        url: url,
        type: "PUT",
        // dataType: 'json',
        cache: false,
        data: params,
        success: function(result) {
            if ( callback ) callback(result);
        }.bind(this),
        error: function(xhr, status, err) {
            console.error(url, status, err.toString());
        }.bind(this)
    });
}
