import { useDispatch, useSelector } from 'react-redux';
import { selectCompanyAction, toggleMenuAction, closeMenuAction } from './actions';
import { RootState } from './store';

const DropdownLink = () => {
	const { open, companies, selectedCompany } = useSelector((state: RootState) => state.menu);
	const dispatch = useDispatch();
	const handleChildClick = function (e:React.MouseEvent<HTMLElement>) {
		e.stopPropagation();
		dispatch(toggleMenuAction());
	  };
	return (
		<div>
			<div onClick={(e: React.MouseEvent<HTMLElement>) => handleChildClick(e)} className="nav__link">
				<div className="nav__link-text-wrapper">
					<div className="nav__link-text">Elon Musk</div>

					<div className="nav__link-subtext">{companies[selectedCompany]}</div>
				</div>

				<i className="material-icons-outlined nav__link-icon">settings</i>
			</div>
			{open && (
				<div className="dropdown__container">
					<div className="dropdown__title dropdown__item">Your companies</div>
					{companies.map((company, index) => (
						<a href="#" className={`link ${selectedCompany == index ? "link__selected" : ""}`}>
							<div
								className="{companies[selectedCompany]} dropdown__company dropdown__item"
								onClick={() => dispatch(selectCompanyAction({ index }))}
							>
								{company}
								<i className={`material-icons dropdown__icon dropdown__icon-selected ${selectedCompany == index ? "" : "hidden"}`}>check</i>
							</div>
						</a>
					))}
					<a href="#" className="link">
						<div onClick={() => dispatch(closeMenuAction())} className="dropdown__item">
							<i className="material-icons dropdown__icon">phone_iphone</i>Get the mobile app
						</div>
					</a>
					<a href="#" className="link">
						<div onClick={() => dispatch(closeMenuAction())} className="dropdown__item">
							<i className="material-icons dropdown__icon">people</i>Community
						</div>
					</a>
					<a href="#" className="link">
						<div onClick={() => dispatch(closeMenuAction())} className="dropdown__item dropdown__line">
							<i className="material-icons dropdown__icon">class</i>Knowledge base
						</div>
					</a>
					<a href="#" className="link">
						<div onClick={() => dispatch(closeMenuAction())} className="dropdown__item">
							<i className="material-icons dropdown__icon">settings</i>Settings
						</div>
					</a>
					<a href="#" className="link">
						<div onClick={() => dispatch(closeMenuAction())} className="dropdown__log-out dropdown__item">
							<i className="material-icons dropdown__icon">logout</i>Log out
						</div>
					</a>
				</div>
			)}
		</div>
	);
};

export default DropdownLink;
