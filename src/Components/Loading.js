import React from 'react'
import Skeleton from 'react-loading-skeleton'

const Loading = (props) => {
    return (
        <>
            {props.type === "details" ? (
                <>
                    <div className="col-md-6">
                        <Skeleton height={350} />
                    </div>
                    <div className="col-md-6">
                        <Skeleton height={350} />
                    </div>
                </>
            ) : (
                <>
                    <div className="col-md-3">
                        <Skeleton height={350} />
                    </div>
                    <div className="col-md-3">
                        <Skeleton height={350} />
                    </div>
                    <div className="col-md-3">
                        <Skeleton height={350} />
                    </div>
                    <div className="col-md-3">
                        <Skeleton height={350} />
                    </div>
                </>
            )}
        </>
    )
}

export default Loading