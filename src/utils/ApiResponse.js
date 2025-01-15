class ApiResponse{
    constructor(message,statusCode,data){
        this.statusCode=statusCode;
        this.message=message
        this.success=statusCode<400
        this.data=data
        
    }
}

export {ApiResponse}
