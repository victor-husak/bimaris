import {
  forwardRef,
  ElementType,
  ReactNode,
  ComponentPropsWithRef,
} from "react";

// 1. Описываем собственные пропсы
type BoxOwnProps<E extends ElementType> = {
  as?: E;
  children?: ReactNode;
};

// 2. Объединяем с атрибутами HTML-элемента, исключая конфликтующие пропсы
type BoxProps<E extends ElementType> = BoxOwnProps<E> &
  Omit<ComponentPropsWithRef<E>, keyof BoxOwnProps<E>>;

// 3. Создаем внутренний компонент.
// Используем тип any для ref внутри, так как мы "обманем" систему типов снаружи.
const BoxInner = <E extends ElementType = "div">(
  { as, children, ...props }: BoxProps<E>,
  ref: React.Ref<any>,
) => {
  const Component = as || "div";
  return (
    <Component ref={ref} {...props}>
      {children}
    </Component>
  );
};

// 4. ГЛАВНОЕ: Принудительно приводим тип при экспорте.
// Это "говорит" TypeScript, что Box — это функция, которая принимает пропсы в зависимости от "as".
export const Box = forwardRef(BoxInner) as <E extends ElementType = "div">(
  props: BoxProps<E>,
) => React.JSX.Element;

// Для отладки в React DevTools
(Box as any).displayName = "Box";
