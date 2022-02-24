import Wrapper from '../components/Wrapper';
import { Typography } from '@mui/material';

const About = () => {
  return (
    <Wrapper>
      <Typography p={1} variant="h4">
        Коротка довідка про додаток:
      </Typography>
      <Typography p={1} variant="body1">
        Додаток відображає статистику захворювань COVID 19, використовуючи{' '}
        <a href="https://covid19api.com/" rel="nofollow noopener noreferrer">
          публічне api
        </a>
        .
      </Typography>
      <Typography p={1} variant="body1">
        Cкладається з трьох сторінок :
      </Typography>
      <ul>
        <li>
          <strong>World WIP</strong> - на сторінці відображена глобальна статистика захворювань у
          світі, у вигляді гістограми. Фільтри: date_from, date_to, case.
        </li>
        <li>
          <strong>By Country</strong> - на сторінці відображена глобальна статистика захворювань для
          окремих країн, у вигляді гістограми. Фільтри: country, date_from, cases. Дані для регіонів
          сумуються та відображаються вцілому для країни.
        </li>
        <li>
          <strong>About</strong> - на сторінці відображена загальні інформація про додаток. Поточна
          сторінка.
        </li>
      </ul>
      <Typography p={1} variant="body1">
        Зліва розташований сайдбар з меню для перемиканнями між сторінками.
      </Typography>
      <Typography p={1} variant="body1">
        Список країн завантажується одноразово і кешується. <br />
        При перемиканні між сторінками обрані фільтри зберігаються.
      </Typography>
      <Typography p={1} variant="body1">
        Для роутингу між сторінками використовується бібліотека <strong>react-router</strong>.
        <br />
        Графіки побудовані за допомогою бібліотеки <strong>recharts</strong>.
        <br />
        Оформлення здійснене за допомогою бібліотек <strong>@mui/material</strong> з використанням{' '}
        <strong>@mui/styled-engine-sc</strong>.
      </Typography>
    </Wrapper>
  );
};

export default About;
