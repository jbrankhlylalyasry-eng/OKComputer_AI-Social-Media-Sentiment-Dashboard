// SentimentAI - Main JavaScript File
// Advanced Social Media Sentiment Analysis Platform

// Global state management
const AppState = {
    currentPlatform: 'facebook',
    sentimentData: {},
    campaigns: [],
    settings: {},
    charts: {},
    isRealTimeActive: true
};

// Mock data generation
const MockData = {
    generateSentimentData: () => ({
        positive: Math.floor(Math.random() * 30) + 60,
        neutral: Math.floor(Math.random() * 20) + 10,
        negative: Math.floor(Math.random() * 15) + 5
    }),

    generateEmotionsData: () => ({
        happy: Math.floor(Math.random() * 20) + 30,
        angry: Math.floor(Math.random() * 15) + 5,
        optimistic: Math.floor(Math.random() * 20) + 20,
        unhappy: Math.floor(Math.random() * 10) + 5,
        excited: Math.floor(Math.random() * 15) + 10,
        concerned: Math.floor(Math.random() * 12) + 8
    }),

    generateTimelineData: () => {
        const data = [];
        const now = new Date();
        for (let i = 29; i >= 0; i--) {
            const date = new Date(now);
            date.setDate(date.getDate() - i);
            data.push({
                date: date.toISOString().split('T')[0],
                positive: Math.floor(Math.random() * 40) + 40,
                neutral: Math.floor(Math.random() * 30) + 20,
                negative: Math.floor(Math.random() * 20) + 10
            });
        }
        return data;
    },

    generateRecentActivity: () => [
        {
            id: 1,
            platform: 'facebook',
            content: 'Just launched our new product line! Amazing response from customers 🎉',
            author: 'Sarah Johnson',
            sentiment: 'positive',
            engagement: 234,
            time: '2 minutes ago'
        },
        {
            id: 2,
            platform: 'instagram',
            content: 'Love the new design updates, looks much cleaner now ✨',
            author: 'Mike Chen',
            sentiment: 'positive',
            engagement: 156,
            time: '5 minutes ago'
        },
        {
            id: 3,
            platform: 'tiktok',
            content: 'Having some issues with the latest update, anyone else?',
            author: 'Emma Wilson',
            sentiment: 'negative',
            engagement: 89,
            time: '8 minutes ago'
        },
        {
            id: 4,
            platform: 'facebook',
            content: 'Great customer service experience today, thank you!',
            author: 'David Brown',
            sentiment: 'positive',
            engagement: 167,
            time: '12 minutes ago'
        },
        {
            id: 5,
            platform: 'instagram',
            content: 'The new features are okay, could be better though',
            author: 'Lisa Garcia',
            sentiment: 'neutral',
            engagement: 78,
            time: '15 minutes ago'
        }
    ],

    generateTopContent: () => [
        {
            id: 1,
            platform: 'facebook',
            content: 'Our latest product launch has exceeded all expectations! The positive feedback from our community has been incredible. Thank you for your continued support! 🚀',
            author: 'TechCorp Official',
            sentiment: 'positive',
            engagement: 2341,
            reach: 15420,
            time: '4 hours ago'
        },
        {
            id: 2,
            platform: 'instagram',
            content: 'Behind the scenes of our design process ✨ Swipe to see how we create products that matter! #DesignProcess #Innovation',
            author: 'Design Team',
            sentiment: 'positive',
            engagement: 1876,
            reach: 12300,
            time: '6 hours ago'
        },
        {
            id: 3,
            platform: 'tiktok',
            content: 'POV: You try our new feature for the first time 😍 #TechTok #NewFeature #Excited',
            author: 'Product Manager',
            sentiment: 'positive',
            engagement: 3421,
            reach: 25600,
            time: '8 hours ago'
        }
    ]
};

// Chart initialization and management
const ChartManager = {
    initTrendsChart: () => {
        const chartDom = document.getElementById('trends-chart');
        if (!chartDom) return;

        const myChart = echarts.init(chartDom);
        const timelineData = MockData.generateTimelineData();

        const option = {
            backgroundColor: 'transparent',
            tooltip: {
                trigger: 'axis',
                backgroundColor: '#1A2332',
                borderColor: '#3B82F6',
                textStyle: { color: '#fff' }
            },
            legend: {
                data: ['Positive', 'Neutral', 'Negative'],
                textStyle: { color: '#9CA3AF' },
                top: 10
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: timelineData.map(d => d.date),
                axisLine: { lineStyle: { color: '#374151' } },
                axisLabel: { color: '#9CA3AF' }
            },
            yAxis: {
                type: 'value',
                axisLine: { lineStyle: { color: '#374151' } },
                axisLabel: { color: '#9CA3AF' },
                splitLine: { lineStyle: { color: '#374151' } }
            },
            series: [
                {
                    name: 'Positive',
                    type: 'line',
                    stack: 'Total',
                    data: timelineData.map(d => d.positive),
                    lineStyle: { color: '#10B981' },
                    areaStyle: { color: 'rgba(16, 185, 129, 0.1)' }
                },
                {
                    name: 'Neutral',
                    type: 'line',
                    stack: 'Total',
                    data: timelineData.map(d => d.neutral),
                    lineStyle: { color: '#6B7280' },
                    areaStyle: { color: 'rgba(107, 114, 128, 0.1)' }
                },
                {
                    name: 'Negative',
                    type: 'line',
                    stack: 'Total',
                    data: timelineData.map(d => d.negative),
                    lineStyle: { color: '#EF4444' },
                    areaStyle: { color: 'rgba(239, 68, 68, 0.1)' }
                }
            ]
        };

        myChart.setOption(option);
        AppState.charts.trends = myChart;
    },

    initPerformanceChart: () => {
        const chartDom = document.getElementById('performance-chart');
        if (!chartDom) return;

        const myChart = echarts.init(chartDom);

        const option = {
            backgroundColor: 'transparent',
            tooltip: {
                trigger: 'item',
                backgroundColor: '#1A2332',
                borderColor: '#3B82F6',
                textStyle: { color: '#fff' }
            },
            legend: {
                orient: 'vertical',
                left: 'left',
                textStyle: { color: '#9CA3AF' }
            },
            series: [
                {
                    name: 'Content Performance',
                    type: 'pie',
                    radius: '50%',
                    data: [
                        { value: 1048, name: 'High Engagement', itemStyle: { color: '#10B981' } },
                        { value: 735, name: 'Medium Engagement', itemStyle: { color: '#3B82F6' } },
                        { value: 580, name: 'Low Engagement', itemStyle: { color: '#8B5CF6' } },
                        { value: 484, name: 'No Engagement', itemStyle: { color: '#6B7280' } }
                    ],
                    emphasis: {
                        itemStyle: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        };

        myChart.setOption(option);
        AppState.charts.performance = myChart;
    },

    initTimelineChart: () => {
        const chartDom = document.getElementById('timeline-chart');
        if (!chartDom) return;

        const myChart = echarts.init(chartDom);
        const timelineData = MockData.generateTimelineData();

        const option = {
            backgroundColor: 'transparent',
            tooltip: {
                trigger: 'axis',
                backgroundColor: '#1A2332',
                borderColor: '#3B82F6',
                textStyle: { color: '#fff' }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: {
                type: 'category',
                data: timelineData.map(d => d.date),
                axisLine: { lineStyle: { color: '#374151' } },
                axisLabel: { color: '#9CA3AF' }
            },
            yAxis: {
                type: 'value',
                axisLine: { lineStyle: { color: '#374151' } },
                axisLabel: { color: '#9CA3AF' },
                splitLine: { lineStyle: { color: '#374151' } }
            },
            series: [
                {
                    name: 'Sentiment Score',
                    type: 'bar',
                    data: timelineData.map(d => d.positive - d.negative),
                    itemStyle: {
                        color: (params) => {
                            return params.value > 0 ? '#10B981' : '#EF4444';
                        }
                    }
                }
            ]
        };

        myChart.setOption(option);
        AppState.charts.timeline = myChart;
    },

    initPlatformChart: () => {
        const chartDom = document.getElementById('platform-chart');
        if (!chartDom) return;

        const myChart = echarts.init(chartDom);

        const option = {
            backgroundColor: 'transparent',
            tooltip: {
                trigger: 'axis',
                backgroundColor: '#1A2332',
                borderColor: '#3B82F6',
                textStyle: { color: '#fff' }
            },
            legend: {
                data: ['Facebook', 'Instagram', 'TikTok'],
                textStyle: { color: '#9CA3AF' }
            },
            radar: {
                indicator: [
                    { name: 'Positive', max: 100 },
                    { name: 'Engagement', max: 100 },
                    { name: 'Reach', max: 100 },
                    { name: 'Sentiment', max: 100 },
                    { name: 'Activity', max: 100 }
                ],
                axisLine: { lineStyle: { color: '#374151' } },
                axisLabel: { color: '#9CA3AF' },
                splitLine: { lineStyle: { color: '#374151' } },
                splitArea: { show: false }
            },
            series: [
                {
                    name: 'Platform Comparison',
                    type: 'radar',
                    data: [
                        {
                            value: [85, 78, 92, 88, 75],
                            name: 'Facebook',
                            itemStyle: { color: '#3B82F6' },
                            areaStyle: { color: 'rgba(59, 130, 246, 0.1)' }
                        },
                        {
                            value: [92, 85, 78, 82, 88],
                            name: 'Instagram',
                            itemStyle: { color: '#8B5CF6' },
                            areaStyle: { color: 'rgba(139, 92, 246, 0.1)' }
                        },
                        {
                            value: [78, 92, 85, 75, 95],
                            name: 'TikTok',
                            itemStyle: { color: '#06B6D4' },
                            areaStyle: { color: 'rgba(6, 182, 212, 0.1)' }
                        }
                    ]
                }
            ]
        };

        myChart.setOption(option);
        AppState.charts.platform = myChart;
    }
};

// UI Component Management
const UIComponents = {
    initTypewriter: () => {
        const element = document.getElementById('typed-text');
        if (!element) return;

        new Typed('#typed-text', {
            strings: [
                'Real-Time Sentiment Analysis',
                'AI-Powered Insights',
                'Social Media Intelligence',
                'Advanced Analytics Platform'
            ],
            typeSpeed: 80,
            backSpeed: 50,
            backDelay: 2000,
            loop: true,
            showCursor: true,
            cursorChar: '|'
        });
    },

    updateSentimentGauge: (data) => {
        const scoreElement = document.getElementById('sentiment-score');
        if (!scoreElement) return;

        const total = data.positive + data.neutral + data.negative;
        const positivePercentage = Math.round((data.positive / total) * 100);
        
        anime({
            targets: scoreElement,
            innerHTML: [parseInt(scoreElement.textContent), positivePercentage],
            duration: 1000,
            round: 1,
            easing: 'easeOutQuart',
            update: function(anim) {
                scoreElement.textContent = Math.round(anim.animatables[0].target.innerHTML) + '%';
            }
        });
    },

    renderRecentActivity: () => {
        const container = document.getElementById('recent-activity');
        if (!container) return;

        const activities = MockData.generateRecentActivity();
        
        container.innerHTML = activities.map(activity => `
            <div class="flex items-center space-x-4 p-4 bg-gray-800/50 rounded-lg border border-white/5 hover:border-white/10 transition-colors">
                <div class="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                    ${activity.platform === 'facebook' ? '📘' : activity.platform === 'instagram' ? '📷' : '🎵'}
                </div>
                <div class="flex-1 min-w-0">
                    <div class="flex items-center space-x-2 mb-1">
                        <span class="font-medium text-sm">${activity.author}</span>
                        <span class="text-xs text-gray-400">${activity.time}</span>
                        <span class="px-2 py-1 text-xs rounded-full ${
                            activity.sentiment === 'positive' ? 'bg-green-500/20 text-green-400' :
                            activity.sentiment === 'negative' ? 'bg-red-500/20 text-red-400' :
                            'bg-gray-500/20 text-gray-400'
                        }">
                            ${activity.sentiment}
                        </span>
                    </div>
                    <p class="text-sm text-gray-300 line-clamp-2">${activity.content}</p>
                    <div class="flex items-center space-x-4 mt-2 text-xs text-gray-400">
                        <span>👍 ${activity.engagement} likes</span>
                        <span>💬 ${Math.floor(activity.engagement / 10)} comments</span>
                        <span>🔄 ${Math.floor(activity.engagement / 20)} shares</span>
                    </div>
                </div>
            </div>
        `).join('');
    },

    renderTopContent: () => {
        const container = document.getElementById('top-content');
        if (!container) return;

        const content = MockData.generateTopContent();
        
        container.innerHTML = content.map(item => `
            <div class="p-4 bg-gray-800/50 rounded-lg border border-white/5 hover:border-white/10 transition-colors">
                <div class="flex items-start space-x-4">
                    <div class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-xl">
                        ${item.platform === 'facebook' ? '📘' : item.platform === 'instagram' ? '📷' : '🎵'}
                    </div>
                    <div class="flex-1 min-w-0">
                        <div class="flex items-center space-x-2 mb-2">
                            <span class="font-medium">${item.author}</span>
                            <span class="text-xs text-gray-400">${item.time}</span>
                            <span class="px-2 py-1 text-xs rounded-full bg-green-500/20 text-green-400">
                                ${item.sentiment}
                            </span>
                        </div>
                        <p class="text-sm text-gray-300 mb-3">${item.content}</p>
                        <div class="flex items-center space-x-6 text-xs text-gray-400">
                            <span>📊 ${item.engagement.toLocaleString()} engagements</span>
                            <span>🎯 ${item.reach.toLocaleString()} reach</span>
                            <button class="text-blue-400 hover:text-blue-300">View Details</button>
                        </div>
                    </div>
                </div>
            </div>
        `).join('');
    },

    initPlatformToggles: () => {
        const toggles = document.querySelectorAll('.platform-toggle');
        
        toggles.forEach(toggle => {
            toggle.addEventListener('click', () => {
                // Remove active class from all toggles
                toggles.forEach(t => t.classList.remove('active'));
                // Add active class to clicked toggle
                toggle.classList.add('active');
                
                // Update current platform
                AppState.currentPlatform = toggle.dataset.platform;
                
                // Update sentiment data
                const newData = MockData.generateSentimentData();
                UIComponents.updateSentimentGauge(newData);
                
                // Add visual feedback
                anime({
                    targets: toggle,
                    scale: [1, 1.05, 1],
                    duration: 300,
                    easing: 'easeOutQuart'
                });
            });
        });
    },

    initFilterTags: () => {
        const filterTags = document.querySelectorAll('.filter-tag');
        
        filterTags.forEach(tag => {
            tag.addEventListener('click', () => {
                // Toggle active state
                tag.classList.toggle('bg-blue-600');
                tag.classList.toggle('text-white');
                tag.classList.toggle('bg-gray-700');
                tag.classList.toggle('text-gray-300');
                
                // Add visual feedback
                anime({
                    targets: tag,
                    scale: [1, 1.1, 1],
                    duration: 200,
                    easing: 'easeOutQuart'
                });
            });
        });
    },

    initToggleSwitches: () => {
        const toggles = document.querySelectorAll('.toggle-switch');
        
        toggles.forEach(toggle => {
            toggle.addEventListener('click', () => {
                toggle.classList.toggle('active');
                
                // Store setting
                const setting = toggle.dataset.setting;
                if (setting) {
                    AppState.settings[setting] = toggle.classList.contains('active');
                }
                
                // Add visual feedback
                anime({
                    targets: toggle,
                    scale: [1, 1.1, 1],
                    duration: 200,
                    easing: 'easeOutQuart'
                });
            });
        });
    },

    initSettingsTabs: () => {
        const tabs = document.querySelectorAll('.settings-tab');
        const contents = document.querySelectorAll('.settings-content');
        
        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                const targetTab = tab.dataset.tab;
                
                // Update tab states
                tabs.forEach(t => {
                    t.classList.remove('active', 'text-blue-400', 'border-blue-400');
                    t.classList.add('text-gray-300', 'border-transparent');
                });
                
                tab.classList.add('active', 'text-blue-400', 'border-blue-400');
                tab.classList.remove('text-gray-300', 'border-transparent');
                
                // Update content visibility
                contents.forEach(content => {
                    content.classList.add('hidden');
                    content.classList.remove('active');
                });
                
                const targetContent = document.getElementById(`${targetTab}-tab`);
                if (targetContent) {
                    targetContent.classList.remove('hidden');
                    targetContent.classList.add('active');
                }
            });
        });
    },

    initRangeSliders: () => {
        const positiveSlider = document.getElementById('positive-threshold');
        const negativeSlider = document.getElementById('negative-threshold');
        const positiveValue = document.getElementById('positive-value');
        const negativeValue = document.getElementById('negative-value');
        
        if (positiveSlider && positiveValue) {
            positiveSlider.addEventListener('input', (e) => {
                positiveValue.textContent = e.target.value;
            });
        }
        
        if (negativeSlider && negativeValue) {
            negativeSlider.addEventListener('input', (e) => {
                negativeValue.textContent = e.target.value;
            });
        }
    },

    initWordCloud: () => {
        const words = document.querySelectorAll('.word-cloud-item');
        
        words.forEach(word => {
            word.addEventListener('click', () => {
                // Add visual feedback
                anime({
                    targets: word,
                    scale: [1, 1.3, 1],
                    rotate: [0, 5, -5, 0],
                    duration: 500,
                    easing: 'easeOutElastic(1, .8)'
                });
                
                // Show keyword details (mock functionality)
                console.log(`Analyzing keyword: ${word.textContent}`);
            });
        });
    }
};

// Animation and Effects
const AnimationManager = {
    initPageAnimations: () => {
        // Animate cards on page load
        const cards = document.querySelectorAll('.card-hover');
        
        anime({
            targets: cards,
            translateY: [50, 0],
            opacity: [0, 1],
            delay: anime.stagger(100),
            duration: 800,
            easing: 'easeOutQuart'
        });
        
        // Animate navigation
        anime({
            targets: 'nav',
            translateY: [-100, 0],
            opacity: [0, 1],
            duration: 600,
            easing: 'easeOutQuart'
        });
    },

    startRealTimeUpdates: () => {
        setInterval(() => {
            if (AppState.isRealTimeActive) {
                // Update sentiment gauge
                const newData = MockData.generateSentimentData();
                UIComponents.updateSentimentGauge(newData);
                
                // Update recent activity
                UIComponents.renderRecentActivity();
                
                // Add subtle pulse to live indicator
                const pulseDot = document.querySelector('.pulse-dot');
                if (pulseDot) {
                    anime({
                        targets: pulseDot,
                        scale: [1, 1.2, 1],
                        duration: 1000,
                        easing: 'easeInOutSine'
                    });
                }
            }
        }, 5000);
    }
};

// Utility Functions
const Utils = {
    debounce: (func, wait) => {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },

    formatNumber: (num) => {
        if (num >= 1000000) {
            return (num / 1000000).toFixed(1) + 'M';
        }
        if (num >= 1000) {
            return (num / 1000).toFixed(1) + 'K';
        }
        return num.toString();
    },

    handleResize: () => {
        Object.values(AppState.charts).forEach(chart => {
            if (chart && chart.resize) {
                chart.resize();
            }
        });
    }
};

// Main initialization
document.addEventListener('DOMContentLoaded', () => {
    // Initialize all components
    UIComponents.initTypewriter();
    UIComponents.initPlatformToggles();
    UIComponents.initFilterTags();
    UIComponents.initToggleSwitches();
    UIComponents.initSettingsTabs();
    UIComponents.initRangeSliders();
    UIComponents.initWordCloud();
    
    // Initialize charts
    ChartManager.initTrendsChart();
    ChartManager.initPerformanceChart();
    ChartManager.initTimelineChart();
    ChartManager.initPlatformChart();
    
    // Render dynamic content
    UIComponents.renderRecentActivity();
    UIComponents.renderTopContent();
    
    // Initialize animations
    AnimationManager.initPageAnimations();
    AnimationManager.startRealTimeUpdates();
    
    // Set initial sentiment data
    const initialData = MockData.generateSentimentData();
    UIComponents.updateSentimentGauge(initialData);
    
    // Handle window resize
    window.addEventListener('resize', Utils.debounce(Utils.handleResize, 250));
    
    // Add click handlers for buttons
    document.addEventListener('click', (e) => {
        if (e.target.matches('button') && !e.target.classList.contains('platform-toggle') && !e.target.classList.contains('filter-tag')) {
            // Add visual feedback to all buttons
            anime({
                targets: e.target,
                scale: [1, 0.95, 1],
                duration: 150,
                easing: 'easeOutQuart'
            });
        }
    });
    
    console.log('SentimentAI Platform initialized successfully!');
});