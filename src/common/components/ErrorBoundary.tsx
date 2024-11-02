import {Text} from 'react-native';
import {Component, ErrorInfo, ReactNode} from 'react';

type TProps = {
  children: ReactNode;
};

interface TState {
  hasError: boolean;
}

class ErrorBoundary extends Component<TProps, TState> {
  public state: TState = {
    hasError: false,
  };

  public static getDerivedStateFromError(_: Error): TState {
    return {hasError: true};
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return <Text>Uncaught Error</Text>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
