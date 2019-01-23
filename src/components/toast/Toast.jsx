import React, { Component } from 'react'

export default class Toast extends Component {
    render() {
        return (
            <div>
                <div className="toast" role="alert" aria-live="assertive" aria-atomic="true">
                    <div className="toast-header">
                        <img src="https://as2.ftcdn.net/jpg/01/22/01/93/500_F_122019399_xVgrSWMXznIt7bhpFhRc0xcIgnkWvqti.jpg" className="rounded mr-2" alt="something" />
                        <strong className="mr-auto">Bootstrap</strong>
                        <small className="text-muted">11 mins ago</small>
                        <button type="button" className="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="toast-body">
                        Hello, world! This is a toast message.
                    </div>
                </div>
            </div>
        )
    }
}
