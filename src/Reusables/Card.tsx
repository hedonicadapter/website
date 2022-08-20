import { motion } from 'framer-motion';

type CardProps = {
  title?: string;
  titleLink?: string;
  cardLink?: string;
  titleElement?: JSX.Element;
  titleInside?: Boolean;
  text?: string | JSX.Element;
  primary?: Boolean;
  secondary?: Boolean;
  inverted?: Boolean;
  children?: JSX.Element;
};

export const Card = ({
  title,
  titleLink,
  cardLink,
  titleElement,
  titleInside = false,
  text,
  primary = false,
  secondary = false,
  inverted = false,
  children,
}: CardProps) => {
  const handleCardLinkOnClick = () => {
    window.open(cardLink);
  };

  return (
    <motion.div
      whileTap={cardLink && { opacity: 0.6, scale: 0.99 }}
      className={cardLink ? 'card-link no-select' : 'no-select'}
      onClick={() => cardLink && handleCardLinkOnClick()}
    >
      {!titleInside && <h3 className='card-outside-title'>{title}</h3>}

      <motion.div
        className={
          primary
            ? 'card color-primary mdc-elevation--z1'
            : secondary
            ? 'card color-secondary mdc-elevation--z1'
            : inverted
            ? 'card color-inverted mdc-elevation--z1'
            : 'card color-default mdc-elevation--z1'
        }
      >
        <motion.div className='card-content'>
          {titleInside && (
            <div className='title-container'>
              <a href={titleLink}>
                <h3 style={{ margin: 0, marginBottom: 5 }}>{title}</h3>
              </a>
              {titleElement}
            </div>
          )}
          <p>{text}</p>
          {children}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
