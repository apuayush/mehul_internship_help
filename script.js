$(document).ready(function(){
			var phase_details = $('#phase_details')
			var container = $('#container')
    $('#insert').change(function(){
    	container.empty();
        var insert = $('#insert').val();
        for(var i=0;i<insert;i++){
        	var phase_upload = phase_details.clone();
        	
        	container.append(phase_upload);



        }
    })
})