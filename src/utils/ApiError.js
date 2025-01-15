class ApiError extends Error
{


        constructor(
            message="SomeThing went wrong",
            statusCode,
            error=[],
            stack
        ){
            super(message)
            this.statusCode=statusCode
            this.data=null
            this.error=error
            this.stack=stack
            this.message=message
            this.success=false

        }

}

export {ApiError}