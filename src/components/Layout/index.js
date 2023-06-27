import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import BottomToolbar from './BottomToolBar';
import Menu from './navigationDrawer';

const Layout = ({ children, title, FooterContent }) => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    return (
        <>
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={toggleSidebar}>
                        <Text style={styles.headerText}>{title}</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.content}>{children}</View>

                <View style={styles.footer}>{FooterContent}</View>

                {sidebarOpen && (
                    <View style={styles.sidebar}>
                        {/* Sidebar content goes here */}
                        <Menu />
                    </View>
                )}
            </View>

            <BottomToolbar updateMenuState={toggleSidebar} />
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#add8e6',
        paddingTop: '15%',
        paddingHorizontal: 15,
    },
    headerText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
        paddingBottom: '8%',
    },
    content: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    footer: {
        backgroundColor: '#f2f2f2',
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    sidebar: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 250, // Customize the height of the sidebar as needed
        backgroundColor: '#fff',
        padding: 20,
        borderTopWidth: 1,
        borderTopColor: 'lightgray',
        zIndex: 1, // Ensure the sidebar is displayed above other content
    },
});

export default Layout;
