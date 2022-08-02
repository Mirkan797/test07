import { request } from './api.js'
import ImageViewer from './ImageViewer.js'
import Nodes from './Nodes.js'
import Loading from './Loading.js'
import Breadcrumb from './Breadcrumb.js'

export default function App({ $target }) {
    this.state = {
        isRoot: true,
        isLoading: false,
        nodes: [],
        paths: []
    }
    const loading = new Loading({
        $target
    })

    const breadcrumb = new Breadcrumb({
        $target,
        initialState: this.state.paths,
        onClick: async (id) => {
            // 클릭한 경로 외에 paths를 날려준다.
            if (id) {
                const nextPaths = id ? [...this.state.paths] : []
                const pathIndex = nextPaths.findIndex(path => path.id === id)
                console.log(nextPaths)
                console.log(pathIndex)
                this.setState({
                    ...this.state,
                    paths: nextPaths.slice(0, pathIndex + 1)
                })
            } else {
                this.setState({
                    ...this.state,
                    paths: []
                })
            }

            await fetchNodes(id)
        }
    })

    const nodes = new Nodes({
        $target,
        initialState: {
            isRoot: this.state.isRoot,
            nodes: this.state.nodes,
            selectedImagerUrl: null,
        },
        onClick: async (node) => {
            if (node.type === 'DIRECTORY') {
                await fetchNodes(node.id)

                this.setState({
                    ...this.state,
                    paths: [...this.state.paths, node]
                })
            }

            if(node.type === 'FILE') {
                this.setState({
                    ...this.state,
                    selectedImagerUrl: 'https://cat-api.roto.codes/startic${node.filePath}'
                })
            }
        },
        onPrevClick: async () => {
            const nextPaths = [...this.state.paths]
            nextPaths.pop()
            this.setState({
                ...this.state,
                paths: nextPaths
            })

            console.log(nextPaths)
            if (nextPaths.length === 0) {
                await fetchNodes()
            } else {
                await fetchNodes(nextPaths[nextPaths.length - 1].id)
            }
        }
    })

    const ImageViewer = new ImageViewer({
        $target,
        onClose: () => {
            this.setState({
                ...this.state,
                selectedImagerUrl: null
            })
        }
    })


    this.setState = nextState => {
        this.state = nextState

        nodes.setState({
            isRoot: this.state.isRoot,
            nodes: this.state.nodes
        })

        ImageViewer.setState({
            selectedImagerUrl: this.state.selectedImagerUrl
        })

        loading.setState(this.state.isLoading)

        breadcrumb.setState(this.state.paths)
    }

    const fetchNodes = async (id) => {
        this.setState({
            ...this.state,
            isLoading: true
        })
    }
}