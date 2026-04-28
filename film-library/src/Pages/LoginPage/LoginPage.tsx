import Form from '../../components/Form/Form';
import SearchHeader from '../../components/SearchHeader/SearchHeader';

function LoginPage() {
    return (
        <>
            <SearchHeader title={'Вход'}></SearchHeader>
            <Form text={'Войти в профиль'} placeholder={'Ваше имя'}></Form>
        </>
    );
}

export default LoginPage;
