import {Helmet} from 'react-helmet';
import PropTypes from 'prop-types';
import Config from '../../../config';

const Page = ({children, title, ...rest}) => {
  return (
    <div {...rest}>
      <Helmet>
        <title>{`${title} | ${Config.appName}`}</title>
      </Helmet>
      {children}
    </div>
  );
};

Page.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
};

Page.defaultProps = {
  title: '',
};

export default Page;
