import Link from 'next/link';
import './GoButton.scss';

export default function GoButton({
  prevId,
  nextId,
}: {
  prevId: string | null;
  nextId: string | null;
}) {
  return (
    <div className="go-button-wrapper">
      {prevId && (
        <div className="go-button go-button-back">
          <Link href={`/expo/${prevId}/`}>
            <span className={'go-button-icon'} />
            <span>Вернуться обратно</span>
          </Link>
        </div>
      )}
      {nextId && (
        <div className="go-button">
          <Link href={`/expo/${nextId}/`}>
            <span>Продолжить экскурсию</span>
            <span className={'go-button-icon'} />
          </Link>
        </div>
      )}
      {!nextId && (
        <div className="go-button">
          <Link href={`/expo/`}>
            <span className="go-button-text">Вернуться на главную</span>
            <span className={'go-button-icon'} />
          </Link>
        </div>
      )}
    </div>
  );
}
