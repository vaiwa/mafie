/**
 * @jsx React.DOM
 */

var React = require('react')

var Entry = require('./entry.jsx')

var Listing = React.createClass({
	render: function() {
		return (
			<div className="container">
				<div className="row">
					<div className="list_group__box list-group">
						<div className="list-group-item">
							<div className="col__list col-xs-10 col-sm-10">
								<h4 className="contact__title pull-left">Kontaktovat</h4>

									<form role="form">
										<div className="form-group">
											<input type="text" className="form-control input__message" placeholder="Vzkaz spoluhraci"/>
										</div>
									</form>

							</div>
						<div className="col__list col-xs-2 col-sm-2">
						<a href="#" className="message--cancel">
							<span className="btn btn-danger btn-sm pull-right btn__cross"><span className="glyphicon glyphicon-remove-sign"></span>
							</span>
						</a>
						<div className="clearfix"></div>
						<a href="#" className="message--send">
						<span className="btn btn-success btn-sm pull-right btn__cross"><span className="glyphicon glyphicon-ok-circle"></span>
						</span>
						</a>
					</div>
					<div className="clearfix"></div>
					</div>
						{this.props.entries.map(function(data) {
							return <Entry key={data.id} name={data.name} place={data.place} time={data.time} />
						})}
					</div>
				</div>
			</div>
		)
	}
})

module.exports = Listing