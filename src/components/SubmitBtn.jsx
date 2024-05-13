import { useNavigation } from 'react-router-dom';
const SubmitBtn = ({text}) => {
  const navigation = useNavigation()
  const isSubmitting = navigation.state === 'submitting'
  return (
    <button type="submit" className="btn btn-primary btn-block"disabled={isSubmitting}>
        
        {isSubmitting? ( <>
              <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
              sending...
              </>
        ):(
            text || 'submit'
        )}
    </button>
  );
};

export default SubmitBtn