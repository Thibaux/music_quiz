class Result {
    protected passed: boolean;
    protected message?: string = '';

    hasPassed = () => this.passed;
    hasFailed = () => !this.passed;

    asPassed(message?: string): Result {
        this.passed = true;
        this.message = message && this.message;

        return this;
    }

    asFailed(message?: string): Result {
        this.passed = false;
        this.message = message && this.message;

        return this;
    }
}

export default Result;
