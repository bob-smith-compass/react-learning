import React, { Component } from 'react'

export default class Notification extends Component {
    render() {
        return (
            <div>
                <button type="button" className="btn btn-primary">
                    Notifications <span className="badge badge-light">5</span>
                </button>

            </div>
        )
    }
}
